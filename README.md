# jtz-time-tracker-utils [![NPM Badge](https://img.shields.io/npm/v/jtz-time-tracker-utils)](https://www.npmjs.com/package/jtz-time-tracker-utils)

> Assorted utilities / CLI for dealing with time trackers. Not sure how much I'm going to be building here; just needed a place to put some assorted personal tools for now.
>
> 🚨 Warning: Experimental / built for personal use

## CLI

### CLI - Setup

#### CLI - Installation

This package is available via the NPM registry, [under the name `jtz-time-tracker-utils`](https://www.npmjs.com/package/jtz-time-tracker-utils).

You can install it with the NPM or Yarn commands you are used to, but some examples:

```sh
# Install globally
npm install -g jtz-time-tracker-utils
jttu --help
```

#### CLI - Configuration and Authentication

For configuring authentication (and possibly other config settings in the future), you will need a JSON file. By default, the CLI will look for one in your home directory, named `.jtz-time-tracker-utils.config.json`.

Current possible config values:

Key | Expected Value Type | Description
--- | --- | ---
`HARVEST_PAT_ACCOUNT_ID` | `string \| number` | The *Account ID* associated with a harvest PAT ([see section below](#harvest-authentication)).
`HARVEST_PAT_TOKEN` | `string` | The actual *Token value* associated with a harvest PAT ([see section below](#harvest-authentication)).
`TOGGL_API_TOKEN` | `string` | A Toggl API token ([see section below](#toggl-authentication)).

### CLI - Commands

All commands are prefixed with the global registered entrypoint for the application:

- Prod:
	- `npx jtz-time-tracker-utils {COMMAND}`
	- `jttu {COMMAND}` (after installing globally with `npm -g jtz-time-tracker-utils`)
- Locally (dev)
	- `npx tsx ./cli.ts {COMMAND}`

Platform | Command | Description
--- | --- | ---
`harvest` ✅ <br> `toggl` ✅ | `resume` | Resume the previously running time entry, with the start time set to right now.
`harvest` ✅ <br> `toggl` ✅ | `stop` | Stop the currently running time entry.
`harvest` ✅ <br> `toggl` ✅ | `status` | Display timer status / info.
`harvest` ✅ <br> `toggl` ❌ | `rollup` | Generates a "roll-up" report, by user, client, project, and task.

> For any given command, you can use `--help` to see information about the available arguments.

## Application Specifics

### Harvest Authentication

Harvest authentication is done with a Personal Access Token (PAT). Head over to the [Harvest Developers page](https://id.getharvest.com/developers) to configure new (or view existing) PATs for your specific account.

### Toggl Authentication

You can find your personal toggl API token under [your profile settings](https://track.toggl.com/profile). Scroll to the bottom of the page, look for the *API Token* section, and click the *Click to reveal* button to show the token you can copy and paste.

## Changelog / Releases

Date | Release | Notes
--- | --- | ---
10/6/2024 | `v1.4.0` | Add toggl support! 🎉
3/5/2024 | `v1.3.0` | Split up CLI vs non-CLI export, add new Harvest commands
1/2/2024 | `v1.2.0` | Start exporting types, open up interfaces, build script fixups.
9/17/2023 | `v1.1.1` | Add `status` command for Harvest
4/30/2023 | `v1.0.1` | Initial release 🚀! Just Harvest supported at this time.

## Development

This project uses [`task` (aka `go-task`)](https://github.com/go-task/task) for developer task management and execution. [The `Taskfile.yml` file](./Taskfile.yml) serves as a way to organize these commands, as well as a form of documentation and easy entrypoint into getting started with the project.

You can use `task --list-all` to see all available `task` commands.

## About Me
More About Me (Joshua Tzucker):

 - 🔗<a href="https://joshuatz.com/" rel="noopener" target="_blank">joshuatz.com</a>
 - 💾<a href="https://github.com/joshuatz" rel="noopener" target="_blank">github.com/joshuatz</a>
