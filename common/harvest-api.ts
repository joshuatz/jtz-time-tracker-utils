import { endOfWeek, format, startOfWeek } from 'date-fns';
import fetch, { HeadersInit } from 'node-fetch';
import { URL, URLSearchParams } from 'node:url';
import { PagenationResponse as HarvestPaginatedResponse } from '../vendor/node-harvest/base/pagenation.js';
import { TaskAssignment as _TaskAssignment } from '../vendor/node-harvest/taskAssignments.models.js';
import {
	TimeEntriesPagenationResponse as _TimeEntriesPagenationResponse,
	TimeEntry as _TimeEntry,
} from '../vendor/node-harvest/timeEntries.models.js';
import { User as HarvestUser } from '../vendor/node-harvest/users.models.js';
import { APP_NAME, APP_URL } from './constants.js';
import { TimeEntryBase, TimeTracker, TimerStatus } from './time-tracker-base.js';

// Monkey-patching some incorrect type-defs from `node-harvest`
type HarvestTimeEntry = Omit<_TimeEntry, 'client' | 'project' | 'user'> & {
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
type TaskAssignment = _TaskAssignment & Pick<HarvestTimeEntry, 'project' | 'task'>;

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
					entries: HarvestTimeEntry[];
					entriesRollup: {
						[entryTitle: string]: {
							title: string;
							totalHours: number;
							entries: HarvestTimeEntry[];
						};
					};
					tasks: {
						[task: string]: {
							totalHours: number;
							entries: HarvestTimeEntry[];
							entriesRollup: {
								[entryTitle: string]: {
									title: string;
									totalHours: number;
									entries: HarvestTimeEntry[];
								};
							};
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

/**
 * Note: For convenience, I'm duplicating `task.id` to `task_id`, to flatten
 * things out a little
 */
export interface TaskAssignmentRollup {
	all: Array<TaskAssignment & { task_id: number }>;
	byProject: {
		[projectId: number | string]: Array<TaskAssignment & { task_id: number }>;
	};
}

type TimeEntriesPagenationResponse = Omit<_TimeEntriesPagenationResponse, 'time_entries'> & {
	time_entries: HarvestTimeEntry[];
};

const formatTimeEntryForConsole = (timeEntry: HarvestTimeEntry) => {
	return `${timeEntry.id} (${timeEntry.client.name}${!!timeEntry.notes ? ', ' + timeEntry.notes : ''})`;
};

export const getWeekStartAndEnd = (dayInWeek?: Date) => {
	dayInWeek = dayInWeek || new Date();
	return {
		startDate: startOfWeek(dayInWeek, { weekStartsOn: 1 }),
		endDate: endOfWeek(dayInWeek, { weekStartsOn: 1 }),
	};
};

export class HarvestApi extends TimeTracker<HarvestTimeEntry> {
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

	public normalizeEntry(entry: HarvestTimeEntry): TimeEntryBase {
		return {
			client: entry.client.name,
			project: entry.project.name,
			title: entry.notes,
		};
	}

	public async fetchWithAuth<T extends Record<string, any>>(
		path: `/${string}`,
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
	public async getRollup({
		startDate,
		endDate,
		userIdFilter,
		userNameFilter,
		filter,
	}: {
		startDate: Date;
		endDate: Date;
		userIdFilter?: undefined | number | number[];
		userNameFilter?: undefined | string | string[];
		/**
		 * Optional filter to include / exclude entries. Return false to exclude an entry.
		 */
		filter?: (entry: HarvestTimeEntry) => boolean | Promise<boolean>;
	}) {
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
			if (filter && !(await filter(entry))) {
				continue;
			}
			if (userNameFilter) {
				const filterNames = Array.isArray(userNameFilter) ? userNameFilter : [userNameFilter];
				if (!filterNames.includes(entry.user.name)) {
					continue;
				}
			}
			const clientName = entry.client.name;
			const clientId = entry.client.id;
			const projectName = entry.project.name;
			const taskId = entry.task.id;
			const taskName = entry.task.name;
			const entryTitle = entry.notes;
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

				// Upsert project-level totals
				let project = client.projects[projectName];
				if (project) {
					project.totalHours += entryHours;
					project.entries.push(entry);
				} else {
					client.projects[projectName] = {
						totalHours: entryHours,
						entries: [entry],
						entriesRollup: {},
						tasks: {},
					};
					project = client.projects[projectName]!;
				}

				// Upsert task-level rollup
				let task = project.tasks[taskName];
				if (task) {
					task.totalHours += entryHours;
				} else {
					project.tasks[taskName] = {
						totalHours: entryHours,
						entries: [entry],
						entriesRollup: {},
					};
					task = project.tasks[taskName]!;
				}

				// Update entry-level (grouped by notes, as proxy for entry title) rollups
				for (const entriesRollup of [task.entriesRollup, project.entriesRollup]) {
					const entryRollup = entriesRollup[entryTitle];
					if (entryRollup) {
						entryRollup.totalHours += entryHours;
						entryRollup.entries.push(entry);
					} else {
						entriesRollup[entryTitle] = {
							title: entryTitle,
							totalHours: entryHours,
							entries: [entry],
						};
					}
				}
			}
		}

		return rollup;
	}

	public async getWeekRollup() {
		const { startDate, endDate } = getWeekStartAndEnd();
		return this.getRollup({ startDate, endDate });
	}

	/**
	 * This generates a rollup of project<-many->task_assignment
	 *
	 * This can be useful for crafting inputs to other functions. E.g.,
	 * creating a dropdown you can use to create new entries / start the timer
	 *
	 * @TODO This does not include client info as part of this rollup, but would
	 * be useful to include (would have to map multiple APIs though)
	 */
	public async getTaskAssignmentRollup(): Promise<TaskAssignmentRollup> {
		const rollup: TaskAssignmentRollup = {
			all: [],
			byProject: {},
		};
		const response = await this.fetchWithAuth<HarvestPaginatedResponse & { task_assignments: TaskAssignment[] }>(
			'/task_assignments',
		);
		for (const _assignment of response.task_assignments) {
			const assignment = { ..._assignment, task_id: _assignment.task.id };
			rollup.all.push(assignment);
			rollup.byProject[assignment.project.id] = rollup.byProject[assignment.project.id] || [];
			rollup.byProject[assignment.project.id]!.push(assignment);
		}
		return rollup;
	}

	public async getLastTimeEntry() {
		const userId = await this.getUserId();
		const timeEntries = await this.fetchWithAuth<TimeEntriesPagenationResponse>('/time_entries', {
			user_id: userId.toString(),
			per_page: '10',
		});
		return timeEntries.time_entries[0];
	}

	/**
	 * Start the timer
	 *
	 * Note that the inputs are a little funny, since it requires a valid task_id
	 * AND project_id, even though tasks are already explicitly linked to projects
	 */
	public async start(entry: {
		/** Default = You */
		user_id?: number;
		project_id: number;
		task_id: number;
		/** Start date of entry. Default = now */
		spent_date?: Date;
		notes?: string;
	}): Promise<HarvestTimeEntry> {
		const userId = entry.user_id || (await this.getUserId());
		const startDateStr = HarvestApi.formatDate(entry.spent_date || new Date());
		return this.fetchWithAuth<HarvestTimeEntry>('/time_entries', undefined, {
			method: 'POST',
			body: JSON.stringify({
				...entry,
				user_id: userId,
				spent_date: startDateStr,
			}),
		});
	}

	public async stop(timeEntryId?: number) {
		if (!timeEntryId) {
			const lastEntry = await this.getLastTimeEntry();
			if (!lastEntry || !lastEntry.is_running) {
				throw new Error('Can not stop - no actively running entry.');
			}
			timeEntryId = lastEntry.id;
		}

		await this.fetchWithAuth<HarvestTimeEntry>(`/time_entries/${timeEntryId}/stop`, undefined, {
			method: 'PATCH',
		});
		this._status = {
			isRunning: false,
		};
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
		const startResponse = await this.fetchWithAuth<HarvestTimeEntry>(`/time_entries`, undefined, {
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
			entry: this.normalizeEntry(lastEntry),
		};
	}

	public async getStatus(): Promise<TimerStatus> {
		await this.syncStatus();
		return this._status;
	}
}
