# Database Folder

This folder contains everything related to the MySQL database.

## What goes here?

- The file that creates and exports the MySQL connection or connection pool
- Optional helpers for running SQL queries
- SQL migration or schema files, if added later

## Why is this folder separated?

Keeping all database logic in one place helps keep the rest of the application clean.  
Routes and other logic can import the database connection instead of setting it up themselves.

## Example files

- `database.ts` — creates and exports the MySQL connection
- `queryHelper.ts` — optional helper for handling SQL queries

## Notes for beginners

- The backend connects to the database once using the configuration in this folder
- Features like users and articles all use the same shared connection
