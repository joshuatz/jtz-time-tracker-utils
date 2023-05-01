# jtz-time-tracker-utils

> Assorted utilities / CLI for dealing with time trackers. Not sure how much I'm going to be building here; just needed a place to put some assorted personal tools for now.

## CLI

### CLI - Commands

Platform | Command | Description
--- | --- | ---
`harvest` ✅ <br> `toggl` ❌ | `rollup` | Generates a "roll-up" report, by user, client, project, and task.
`harvest` ✅ <br> `toggl` ❌ | `resume` | Resume the previously running time entry, with the start time set to right now.
`harvest` ✅ <br> `toggl` ❌ | `stop` | Stop the currently running time entry.

> For any given command, you can use `--help` to see information about the available arguments.

### CLI - Config File / Authentication

For configuring authentication (and possibly other config settings in the future), you will need a JSON file. By default, the CLI will look for one in your home directory, named `.jtz-time-tracker-utils.config.json`.

Current possible config values:

Key | Expected Value Type | Description
--- | --- | ---
`HARVEST_PAT_ACCOUNT_ID` | `string \| number` | The *Account ID* associated with a harvest PAT ([see section below](#harvest-authentication)).
`HARVEST_PAT_TOKEN` | `string` | The actual *Token value* associated with a harvest PAT ([see section below](#harvest-authentication)).

## Application Specifics

### Harvest Authentication

Harvest authentication is done with a Personal Access Token (PAT). Head over to the [Harvest Developers page](https://id.getharvest.com/developers) to configure new (or view existing) PATs for your specific account.
