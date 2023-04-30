export interface TimeEntryBase {
	title: string;
}

export type TimerStatus = { isRunning: false } | { isRunning: true; entry: TimeEntryBase; runningForMs: number };

export abstract class TimeTracker {
	protected _status: TimerStatus = { isRunning: false };
	public abstract syncStatus(): Promise<void>;
	public abstract getStatus(): Promise<TimerStatus>;
	public abstract resumeLastEntry(): Promise<void>;
}
