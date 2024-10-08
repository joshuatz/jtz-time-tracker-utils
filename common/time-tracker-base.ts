export interface TimeEntryBase {
	client?: string | undefined | null;
	project?: string | undefined | null;
	title?: string | undefined | null;
}

export type TimerStatus = { isRunning: false } | { isRunning: true; entry: TimeEntryBase; runningForMs: number };

export abstract class TimeTracker<InternalTimeEntryType> {
	protected _status: TimerStatus = { isRunning: false };
	public abstract normalizeEntry(entry: InternalTimeEntryType): TimeEntryBase;
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
