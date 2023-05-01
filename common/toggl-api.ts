import { TimeTracker, TimerStatus } from './time-tracker-base.js';
import { NotImplementedError } from './utils.js';

export class TogglApi extends TimeTracker {
	public getStatus(): Promise<TimerStatus> {
		throw new NotImplementedError();
	}

	public syncStatus(): Promise<void> {
		throw new NotImplementedError();
	}

	public resumeLastEntry(): Promise<void> {
		throw new NotImplementedError();
	}

	public stop(): Promise<void> {
		throw new NotImplementedError();
	}
}
