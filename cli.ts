#!/usr/bin/env node

import { string as cmdString, command, option, run, subcommands } from 'cmd-ts';
import { subWeeks } from 'date-fns';
import { readFileSync } from 'fs';
import { homedir } from 'os';
import * as path from 'path';
import { APP_NAME } from './common/constants.js';
import { HarvestApi, RollupByClient, getWeekStartAndEnd } from './common/harvest-api.js';
import { TogglApi } from './common/toggl-api.js';
import { NotImplementedError } from './common/utils.js';

const repeatChar = (length: number, char: string) => {
	return Array(length).fill(char).join('');
};

const renderHeading = (headingText = 'NEW SECTION') => {
	// @TODO Use a nice TUI lib for this
	const termWidth = Math.min(process.stdout.columns, 120);
	const headingPadding = repeatChar(Math.ceil((termWidth - headingText.length) / 2), ' ');
	console.log(
		[repeatChar(termWidth, '='), headingPadding + headingText + headingPadding, repeatChar(termWidth, '=')].join(
			'\n'
		)
	);
};

type Platform = 'toggl' | 'harvest';
type ClientByPlatform<P extends Platform> = P extends 'toggl' ? TogglApi : HarvestApi;

const getClient = <P extends Platform>(platform: P, authFile: string): ClientByPlatform<P> => {
	const authInfo = JSON.parse(readFileSync(authFile).toString());
	if (platform === 'harvest') {
		return new HarvestApi(authInfo.HARVEST_PAT_ACCOUNT_ID, authInfo.HARVEST_PAT_TOKEN);
	}

	return new TogglApi() as ClientByPlatform<P>;
};

const commonArgs = {
	authFile: option({
		long: 'auth-file',
		defaultValue: () => {
			return path.join(homedir(), '.jtz-time-tracker-utils.config.json');
		},
		type: cmdString,
		description: 'Path to a JSON config file that contains authentication information for your time tracker',
	}),
};

const getSubcommandsForPlatform = (platform: Platform) => {
	const stop = command({
		name: 'Stop',
		args: commonArgs,
		handler: async ({ authFile }) => {
			const client = getClient(platform, authFile);
			return client.stop();
		},
	});
	const resume = command({
		name: 'Resume Last Entry',
		args: commonArgs,
		handler: async ({ authFile }) => {
			const client = getClient(platform, authFile);
			return client.resumeLastEntry();
		},
	});
	const rollup = command({
		name: 'Rollup',
		args: {
			...commonArgs,
			targetWeek: option({
				long: 'target-week',
				description:
					'Which week you want to generate the report for (this week or last). Options: `this` | `last`. ',
				defaultValueIsSerializable: true,
				defaultValue: () => 'this' as const,
				type: {
					async from(str) {
						return str === 'this' ? 'this' : 'last';
					},
				},
			}),
			targetUser: option({
				long: 'target-user',
				description: 'Whom should the report be scoped to? Options: `everyone` | `just-me`. ',
				defaultValueIsSerializable: true,
				defaultValue: () => 'everyone' as const,
				type: {
					async from(str) {
						return str === 'everyone' ? 'everyone' : 'just-me';
					},
				},
			}),
		},
		handler: async ({ targetWeek, authFile, targetUser }) => {
			if (platform === 'toggl') {
				// TODO
				throw new NotImplementedError('toggl not yet supported for rollup reports');
			}

			const roundHours = (hours: number) => hours.toFixed(2);

			const displayClientRollup = (rollup: RollupByClient) => {
				// Create table of `client | project | hours`
				const conciseSummary: Array<{ project: string; client: string; hours: number }> = [];
				// Create table of `client | project | task | hours`
				const granularSummary: Array<{ project: string; client: string; task: string; hours: number }> = [];

				for (const client of Object.values(rollup.clients)) {
					for (const projectName in client.projects) {
						const project = client.projects[projectName]!;
						conciseSummary.push({
							client: client.clientName,
							project: projectName,
							hours: project.totalHours,
						});
						for (const entry of Object.values(project.entriesRollup)) {
							granularSummary.push({
								client: client.clientName,
								project: projectName,
								task: entry.title,
								hours: entry.totalHours,
							});
						}
					}
				}
				// Round everything out and display
				renderHeading('Weekly Total');
				console.log(`Total Hours = ${roundHours(rollup.totalHours)}`);
				renderHeading('Per Client');
				console.table(conciseSummary.map((e) => ({ ...e, hours: roundHours(e.hours) })));
				renderHeading('Per Entry');
				console.table(granularSummary.map((e) => ({ ...e, hours: roundHours(e.hours) })));
			};

			const harvest = getClient('harvest', authFile);
			const today = new Date();
			const yourId = await harvest.getUserId();
			const dayInWeek = targetWeek === 'this' ? today : subWeeks(today, 1);
			const { startDate, endDate } = getWeekStartAndEnd(dayInWeek);
			let userIdFilter = targetUser === 'just-me' ? yourId : undefined;
			const rollupByUser = await harvest.getRollup(startDate, endDate, userIdFilter);

			if (userIdFilter) {
				// There should only be one userId roll-up, our own
				renderHeading('Your Personal Roll-Up Report');
				displayClientRollup(rollupByUser.users[userIdFilter]!);
			} else {
				// Create a per-user rollup table
				renderHeading('User Summary');
				const userSummary = Object.entries(rollupByUser.users).map(([userId, rollupByClient]) => {
					return {
						name: rollupByUser.userIdToNameMap[userId],
						hours: roundHours(rollupByClient.totalHours),
					};
				});
				console.table(userSummary);

				// Display your own breakdown first
				const yourRollup = rollupByUser.users[yourId];
				if (yourRollup) {
					renderHeading('Your Own Entries:');
					displayClientRollup(yourRollup);
				}

				// Now, display everyone else
				for (const [userId, userRollup] of Object.entries(rollupByUser.users)) {
					renderHeading(`User - ${rollupByUser.userIdToNameMap[userId]}`);
					displayClientRollup(userRollup);
				}
			}
		},
	});

	return {
		resume,
		rollup,
		stop,
	};
};

const harvest = subcommands({
	name: 'Harvest',
	cmds: getSubcommandsForPlatform('harvest'),
});

run(
	subcommands({
		name: APP_NAME,
		cmds: { harvest },
	}),
	process.argv.slice(2)
);
