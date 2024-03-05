#!/usr/bin/env node

import { string as cmdString, command, option, run, subcommands } from 'cmd-ts';
import { formatDistance, subWeeks } from 'date-fns';
import { APP_NAME, DEFAULT_CONFIG_PATH } from './common/constants.js';
import { RollupByClient, getWeekStartAndEnd } from './common/harvest-api.js';
import { NotImplementedError, Platform, getClient, includes } from './common/utils.js';
import { VERSION_STRING } from './common/version.js';
import esMain from 'es-main';

export const repeatChar = (length: number, char: string) => {
	return Array(length).fill(char).join('');
};

export const renderHeading = (headingText = 'NEW SECTION') => {
	// @TODO Use a nice TUI lib for this
	const termWidth = Math.min(process.stdout.columns, 120);
	const headingPadding = repeatChar(Math.ceil((termWidth - headingText.length) / 2), ' ');
	console.log(
		[repeatChar(termWidth, '='), headingPadding + headingText + headingPadding, repeatChar(termWidth, '=')].join(
			'\n',
		),
	);
};

const roundHours = (hours: number) => hours.toFixed(2);

export const clientRollupToTables = (rollup: RollupByClient) => {
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
	return { conciseSummary, granularSummary };
};

export const displayClientRollup = (rollup: RollupByClient) => {
	const { conciseSummary, granularSummary } = clientRollupToTables(rollup);
	// Round everything out and display
	renderHeading('Weekly Total');
	console.log(`Total Hours = ${roundHours(rollup.totalHours)}`);
	renderHeading('Per Client');
	console.table(conciseSummary.map((e) => ({ ...e, hours: roundHours(e.hours) })));
	renderHeading('Per Entry');
	console.table(granularSummary.map((e) => ({ ...e, hours: roundHours(e.hours) })));
};

const commonArgs = {
	authFile: option({
		long: 'auth-file',
		defaultValue: () => DEFAULT_CONFIG_PATH,
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
	const status = command({
		name: 'Status',
		args: {
			...commonArgs,
			format: option({
				long: 'format',
				description: 'How to format the output',
				defaultValueIsSerializable: true,
				defaultValue: () => 'plaintext' as const,
				type: {
					async from(str) {
						return str === 'plaintext' ? 'plaintext' : 'json';
					},
				},
			}),
		},
		handler: async ({ authFile, format }) => {
			const client = getClient(platform, authFile);
			const status = await client.getStatus();
			if (format === 'json') {
				console.log(status);
				return;
			}

			let formattedStr = `Timer Active: ${status.isRunning ? '✅' : '❌'}`;
			if (status.isRunning) {
				// Client || Project
				formattedStr += `\n${status.entry.client} || ${status.entry.project}`;
				formattedStr += `\n${status.entry.title || '(No Title)'}`;
				formattedStr += `\n${formatDistance(0, status.runningForMs, { includeSeconds: true })}`;
			}
			console.log(formattedStr);
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

			const harvest = getClient('harvest', authFile);
			const today = new Date();
			const yourId = await harvest.getUserId();
			const dayInWeek = targetWeek === 'this' ? today : subWeeks(today, 1);
			const { startDate, endDate } = getWeekStartAndEnd(dayInWeek);
			let userIdFilter = targetUser === 'just-me' ? yourId : undefined;
			const rollupByUser = await harvest.getRollup({ startDate, endDate, userIdFilter });

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
	const taskAssignmentRollup = command({
		name: 'Get Task Assignment Rollup',
		args: {
			...commonArgs,
			format: option({
				long: 'format',
				description: 'How to format the output',
				defaultValueIsSerializable: true,
				defaultValue: () => 'plaintext' as const,
				type: {
					async from(str) {
						const validOptions = ['plaintext', 'json', 'tsv'] as const;
						if (!includes(validOptions, str)) {
							throw new Error(`Invalid format. Must be one of: ${validOptions.join(', ')}`);
						}
						return str;
					},
				},
			}),
		},
		handler: async ({ authFile, format }) => {
			if (platform === 'toggl') {
				throw new NotImplementedError('toggl not supported for task assignment rollup');
			}

			const harvest = getClient('harvest', authFile);
			const rollup = await harvest.getTaskAssignmentRollup();

			if (format === 'json') {
				console.log(JSON.stringify(rollup));
				return;
			}
			const mdArr = [['name', 'project_id', 'task_id', 'is_active']] as string[][];
			for (const taskAssignment of rollup.all) {
				mdArr.push(
					[
						taskAssignment.project.name,
						taskAssignment.project.id,
						taskAssignment.task_id,
						taskAssignment.is_active,
					].map((e) => e + ''),
				);
			}

			if (format === 'plaintext') {
				console.table(mdArr);
				return;
			}
			console.log(mdArr.map((row) => row.join('\t')).join('\n'));
		},
	});

	return {
		resume,
		rollup,
		stop,
		status,
		taskAssignmentRollup,
	};
};

const harvest = subcommands({
	name: 'Harvest',
	cmds: getSubcommandsForPlatform('harvest'),
});

if (esMain(import.meta)) {
	run(
		subcommands({
			name: APP_NAME,
			version: VERSION_STRING,
			cmds: { harvest },
		}),
		process.argv.slice(2),
	);
}
