import { readFileSync } from 'fs';
import { HarvestApi } from './harvest-api.js';
import { TogglApi } from './toggl-api.js';

export class NotImplementedError extends Error {}

export type Platform = 'toggl' | 'harvest';
export type ClientByPlatform<P extends Platform> = P extends 'toggl' ? TogglApi : HarvestApi;

export const getClient = <P extends Platform>(platform: P, authFile: string): ClientByPlatform<P> => {
	const authInfo = JSON.parse(readFileSync(authFile).toString());
	if (platform === 'harvest') {
		return new HarvestApi(authInfo.HARVEST_PAT_ACCOUNT_ID, authInfo.HARVEST_PAT_TOKEN) as ClientByPlatform<P>;
	}

	return new TogglApi(authInfo.TOGGL_API_TOKEN) as ClientByPlatform<P>;
};

/**
 * Type-safe array.includes for strict readonly arrays
 * @see https://fettblog.eu/typescript-array-includes/
 */
export const includes = <T extends U, U>(collection: ReadonlyArray<T>, searchElement: U): searchElement is T => {
	return collection.includes(searchElement as T);
};
