import fetch, { HeadersInit } from 'node-fetch';
import { TimeEntryBase, TimeTracker, TimerStatus } from './time-tracker-base.js';
import { NotImplementedError } from './utils.js';
import * as TogglTypes from '../vendor/toggl-official/api.js';
import { APP_NAME } from './constants.js';
import { formatISO } from 'date-fns';

type TogglTimeEntry = TogglTypes.ModelsTimeEntry;

export class TogglApi extends TimeTracker<TogglTimeEntry> {
	public static API_BASE = 'https://api.track.toggl.com/api/v9';

	/**
	 * Toggl uses ISO, e.g. 2006-01-02T15:04:05Z
	 */
	public static formatDate(date: Date): string {
		return formatISO(date);
	}
	constructor(private _togglAccountToken: string) {
		super();
	}
	private _lastEntry: TogglTimeEntry | null = null;

	public normalizeEntry(entry: TogglTimeEntry): TimeEntryBase {
		return {
			client: entry.client_name,
			project: entry.project_name,
			title: entry.description,
		};
	}

	public async fetchWithAuth<Response extends Record<string, any> | null>(
		path: `/${string}`,
		queryParams?: Record<string, string>,
		fetchArgs?: Parameters<typeof fetch>[1],
	): Promise<Response> {
		const endpoint = new URL(TogglApi.API_BASE + path);
		if (queryParams) {
			endpoint.search = new URLSearchParams(queryParams).toString();
		}
		const headers: HeadersInit = {
			...fetchArgs?.headers,
			Authorization: `Basic ${Buffer.from(this._togglAccountToken + ':api_token').toString('base64')}`,
			'Content-Type': 'application/json',
		};

		const response = await fetch(endpoint.toString(), {
			...fetchArgs,
			headers,
		});
		console.log({ response });
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}
		return response.json() as unknown as Response;
	}
	public async getStatus(): Promise<TimerStatus> {
		const response = await this.fetchWithAuth<TogglTypes.Me.GetCurrentTimeEntry.ResponseBody | null>(
			'/me/time_entries/current',
		);
		if (!response || response.stop) {
			return {
				isRunning: false,
			};
		}
		if (typeof response.start !== 'string') {
			throw new Error(`Unexpected format of response.start: ${response.start}`);
		}
		return {
			isRunning: true,
			runningForMs: Date.now() - new Date(response.start).getTime(),
			entry: {
				client: response.client_name,
				project: response.project_name,
				title: response.description,
			},
		};
	}

	public async getLastTimeEntry() {
		const entries = await this.fetchWithAuth<TogglTypes.Me.GetTimeEntries.ResponseBody>('/me/time_entries');
		return entries[0];
	}

	public async syncStatus(): Promise<void> {
		throw new NotImplementedError();
	}

	public async resumeLastEntry(): Promise<void> {
		const lastEntry = await this.getLastTimeEntry();
		if (!lastEntry || !lastEntry.stop) {
			throw new Error('No entry to resume / restart.');
		}

		console.log(`Restarting task ${lastEntry.description}`);

		// Only copy necessary props from existing entry, and make sure stop time
		// is unset and duration set to -1, to mark as running
		const partialEntry: Partial<TogglTypes.Workspaces.PostWorkspaceTimeEntries.RequestBody> = {
			created_with: APP_NAME,
			workspace_id: lastEntry.workspace_id!,
			description: lastEntry.description || '',
			billable: lastEntry.billable || false,
			duration: -1,
			start: TogglApi.formatDate(new Date()),
		};
		if (lastEntry.project_id) {
			partialEntry.project_id = lastEntry.project_id;
		}

		const response = await this.fetchWithAuth<TogglTypes.Workspaces.PostWorkspaceTimeEntries.ResponseBody>(
			`/workspaces/${lastEntry.workspace_id}/time_entries`,
			undefined,
			{
				method: 'POST',
				body: JSON.stringify(partialEntry),
			},
		);
		console.log(`Task (re)started - new ID: ${response.id}`);
	}

	public async stop(timeEntryId?: number, workspaceId?: number): Promise<void> {
		if (!timeEntryId) {
			const lastEntry = await this.getLastTimeEntry();
			if (!lastEntry || lastEntry.stop) {
				throw new Error('Can not stop - no actively running entry.');
			}
			timeEntryId = lastEntry.id;
			workspaceId = lastEntry.workspace_id;
		} else if (!workspaceId) {
			throw new Error('workspaceId is required if timeEntryId is provided');
		}
		const response =
			await this.fetchWithAuth<TogglTypes.Workspaces.PatchWorkspaceStopTimeEntryHandler.ResponseBody>(
				`/workspaces/${workspaceId}/time_entries/${timeEntryId}/stop`,
				undefined,
				{
					method: 'PATCH',
				},
			);
		this._lastEntry = response;
		this._status = {
			isRunning: false,
		};
	}
}
