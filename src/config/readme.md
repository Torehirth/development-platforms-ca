# Config Folder

This folder holds configuration files that your application needs to run.

## What goes here?

- Settings for your MySQL database connection.
- Environment variable loading (e.g., using dotenv).
- App-wide configuration values such as API port or JWT secret keys.

## Why is this needed?

Keeping configuration in its own folder prevents hard-coding values inside the code.  
It also makes the project easier to maintain and safer to deploy.

## Example files

- `database.config.ts` — connects your app to MySQL.
- `env.config.ts` — loads variables from `.env`.

## Notes for beginners

- Never store passwords directly in this folder.
- Put sensitive values inside your `.env` file.
- Your config files only _read_ the values and make them available to the rest of the app.
