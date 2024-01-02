import fetch, { HeadersInit } from 'node-fetch';
import { APP_NAME, APP_URL } from './constants.js';
import { endOfWeek, format, startOfWeek } from 'date-fns';
import { URL, URLSearchParams } from 'node:url';
import {
	TimeEntriesPagenationResponse as _TimeEntriesPagenationResponse,
	TimeEntry as _TimeEntry,
} from '../vendor/node-harvest/timeEntries.models.js';
import { User as HarvestUser } from '../vendor/node-harvest/users.models.js';
import { TimerStatus, TimeTracker } from './time-tracker-base.js';

// Monkey-patching some incorrect type-defs from `node-harvest`
type TimeEntry = Omit<_TimeEntry, 'client' | 'project' | 'user'> & {
	client: {
		id: number;
		name: string;
		currency: string;
	};
	project: {
		id: number;
		name: string;
		code: string;
	};
	user: {
		id: number;
		name: string;
	};
	task: {
		id: number;
		name: string;
	};
};

/**
 * A "roll-up" is a type of summary / aggregate report that "rolls up" data that
 * might not be natively linked together in a given platform.
 *
 * Here, we are using roll-up reports to lump together time entries by client,
 * project, and entry title
 */
export interface RollupByClient {
	totalHours: number;
	clients: {
		[client: string]: {
			clientName: string;
			clientId: number;
			totalHours: number;
			projects: {
				[project: string]: {
					totalHours: number;
					entries: TimeEntry[];
					entriesRollup: {
						[entryTitle: string]: {
							title: string;
							totalHours: number;
							entries: TimeEntry[];
						};
					};
				};
			};
		};
	};
}

export interface RollupByUser {
	totalHours: number;
	userIdToNameMap: Record<number | string, string>;
	// Rollup by user
	users: {
		[userId: number | string]: RollupByClient;
	};
	// Aggregate, across all users
	allUsers: RollupByClient;
}

type TimeEntriesPagenationResponse = Omit<_TimeEntriesPagenationResponse, 'time_entries'> & {
	time_entries: TimeEntry[];
};

const formatTimeEntryForConsole = (timeEntry: TimeEntry) => {
	return `${timeEntry.id} (${timeEntry.client.name}${!!timeEntry.notes ? ', ' + timeEntry.notes : ''})`;
};

export const getWeekStartAndEnd = (dayInWeek?: Date) => {
	dayInWeek = dayInWeek || new Date();
	return {
		startDate: startOfWeek(dayInWeek, { weekStartsOn: 1 }),
		endDate: endOfWeek(dayInWeek, { weekStartsOn: 1 }),
	};
};

export class HarvestApi extends TimeTracker {
	public static API_BASE = 'https://api.harvestapp.com/v2';
	public static formatDate(date: Date) {
		return format(date, 'yyyy-MM-dd');
	}
	constructor(
		private _harvestAccountID: number | string,
		private _harvestAccountToken: string,
		private _harvestUserId?: number,
	) {
		super();
	}
	public async fetchWithAuth<T extends Record<string, any>>(
		path: string,
		queryParams?: Record<string, string>,
		fetchArgs?: Parameters<typeof fetch>[1],
	): Promise<T> {
		const endpoint = new URL(HarvestApi.API_BASE + path);
		if (queryParams) {
			endpoint.search = new URLSearchParams(queryParams).toString();
		}

		const headers: HeadersInit = {
			...fetchArgs?.headers,
			Authorization: `Bearer ${this._harvestAccountToken}`,
			'Harvest-Account-Id': this._harvestAccountID + '',
			'User-Agent': `${APP_NAME} (${APP_URL})`,
		};

		if (fetchArgs && fetchArgs.method === 'POST') {
			headers['Content-Type'] = 'application/json';
		}

		const response = await fetch(endpoint.toString(), {
			...fetchArgs,
			headers,
		});
		return response.json() as unknown as T;
	}
	public async getUserId(): Promise<number> {
		if (this._harvestUserId) {
			return this._harvestUserId;
		}

		const userInfo = await this.fetchWithAuth<HarvestUser>('/users/me');
		this._harvestUserId = userInfo.id;
		return userInfo.id;
	}
	public async getRollup(startDate: Date, endDate: Date, userIdFilter?: number | number[]) {
		const timeEntriesQuery: Record<string, string> = {
			from: HarvestApi.formatDate(startDate),
			to: HarvestApi.formatDate(endDate),
		};
		// The harvest API does not seem to accept an array for `user_id`, only single values, so if we want to filter
		// by list of user_ids, that will have to be done after the request, with post-filtering
		if (typeof userIdFilter === 'number') {
			timeEntriesQuery['user_id'] = userIdFilter.toString();
		}
		const timeEntries = await this.fetchWithAuth<TimeEntriesPagenationResponse>('/time_entries', timeEntriesQuery);
		const rollup: RollupByUser = {
			totalHours: 0,
			users: {},
			userIdToNameMap: {},
			allUsers: { totalHours: 0, clients: {} },
		};
		// Do rollup in reverse, so inner arrays list entries from start of week to end
		for (const entry of timeEntries.time_entries.reverse()) {
			const clientName = entry.client.name;
			const clientId = entry.client.id;
			const projectName = entry.project.name;
			const entryHours = entry.hours;
			const userId = entry.user.id;
			const userName = entry.user.name;

			// If the user wants to filter on multiple user_ids, we need to filter here, since the Harvest API
			// does not seem to offer filtering at the API level
			if (Array.isArray(userIdFilter) && !userIdFilter.includes(userId)) {
				continue;
			}

			rollup.userIdToNameMap[userId] = userName;
			rollup.users[userId] = rollup.users[userId] || { totalHours: 0, clients: {} };

			// Update main total
			rollup.totalHours += entryHours;

			// There are multiple by-client roll-ups we can contribute to with a given entry:
			// - the per-user roll-up
			// - the aggregate (all-users) per-client roll-up
			const clientRollups: RollupByClient[] = [rollup.users[userId]!, rollup.allUsers];

			for (const clientRollup of clientRollups) {
				clientRollup.totalHours += entryHours;
				// Create client-level wrapper if doesn't exist
				clientRollup.clients[clientName] = clientRollup.clients[clientName] || {
					clientName,
					clientId,
					totalHours: 0,
					projects: {},
				};
				const client = clientRollup.clients[clientName]!;

				// Update client-level total
				client.totalHours += entryHours;

				// Update project-level totals
				let project = client.projects[projectName];
				if (project) {
					project.totalHours += entryHours;
					project.entries.push(entry);
				} else {
					client.projects[projectName] = {
						totalHours: entryHours,
						entries: [entry],
						entriesRollup: {},
					};
					project = client.projects[projectName]!;
				}

				// Update entry-level (grouped by notes, as proxy for entry title) rollups
				const entryTitle = entry.notes;
				const entryRollup = project.entriesRollup[entryTitle];
				if (entryRollup) {
					entryRollup.totalHours += entryHours;
					entryRollup.entries.push(entry);
				} else {
					project.entriesRollup[entryTitle] = {
						title: entryTitle,
						totalHours: entryHours,
						entries: [entry],
					};
				}
			}
		}

		return rollup;
	}

	public async getWeekRollup() {
		const { startDate, endDate } = getWeekStartAndEnd();
		return this.getRollup(startDate, endDate);
	}

	public async getLastTimeEntry() {
		const userId = await this.getUserId();
		const timeEntries = await this.fetchWithAuth<TimeEntriesPagenationResponse>('/time_entries', {
			user_id: userId.toString(),
			per_page: '10',
		});
		return timeEntries.time_entries[0];
	}

	public async stop(timeEntryId?: number) {
		if (!timeEntryId) {
			const lastEntry = await this.getLastTimeEntry();
			if (!lastEntry || !lastEntry.is_running) {
				throw new Error('Can not stop - no actively running entry.');
			}
			timeEntryId = lastEntry.id;
		}

		this.fetchWithAuth<TimeEntry>(`/time_entries/${timeEntryId}/stop`, undefined, {
			method: 'PATCH',
		});
	}

	public async resumeLastEntry() {
		const lastEntry = await this.getLastTimeEntry();
		if (!lastEntry || lastEntry.is_running) {
			throw new Error('No entry to resume / restart.');
		}
		console.log(`Restarting task ${formatTimeEntryForConsole(lastEntry)}`);

		// WARNING: Using the `/time_entries/{ID}/restart` API endpoint does not
		// work as expected; it will restart a timer in the PAST, not current day
		// Better to just resume manually, by copying forward the attributes to a
		// new entry
		const startResponse = await this.fetchWithAuth<TimeEntry>(`/time_entries`, undefined, {
			method: 'POST',
			body: JSON.stringify({
				project_id: lastEntry.project.id,
				task_id: lastEntry.task.id,
				// The ISO 8601 formatted date the time entry was spent.
				// Make sure we use LOCAL time; use hack
				// https://stackoverflow.com/a/65758103/11447682
				spent_date: new Date().toLocaleDateString('sv'),
				notes: lastEntry.notes,
			}),
		});
		console.log(`Task (re)started - new ID: ${startResponse.id}`);
	}

	public async syncStatus(): Promise<void> {
		const lastEntry = await this.getLastTimeEntry();
		if (!lastEntry || !lastEntry.is_running) {
			this._status = { isRunning: false };
			return;
		}

		this._status = {
			isRunning: true,
			runningForMs: Date.now() - new Date(lastEntry.timer_started_at).getTime(),
			entry: {
				client: lastEntry.client.name,
				project: lastEntry.project.name,
				title: lastEntry.notes,
			},
		};
	}

	public async getStatus(): Promise<TimerStatus> {
		await this.syncStatus();
		return this._status;
	}
}
