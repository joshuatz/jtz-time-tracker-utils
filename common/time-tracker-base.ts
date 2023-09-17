export interface TimeEntryBase {
	client: string;
	project: string;
	title: string;
}

export type TimerStatus = { isRunning: false } | { isRunning: true; entry: TimeEntryBase; runningForMs: number };

export abstract class TimeTracker {
	protected _status: TimerStatus = { isRunning: false };
	public abstract syncStatus(): Promise<void>;
	public abstract getStatus(): Promise<TimerStatus>;
	public abstract stop(): Promise<void>;
	/**
	 * Resume / restart the very last time entry
	 *
	 * If a timer is already running, or there is no previous entry to resume,
	 * this method should throw an error
	 */
	public abstract resumeLastEntry(): Promise<void>;
}
