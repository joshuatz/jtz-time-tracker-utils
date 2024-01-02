import { homedir } from 'os';
import * as path from 'path';

export const APP_NAME = 'jtz-time-tracker-utils';
export const APP_URL = 'https://joshuatz.com';
export const DEFAULT_CONFIG_PATH = path.join(homedir(), '.jtz-time-tracker-utils.config.json');
