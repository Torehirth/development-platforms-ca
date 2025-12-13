# Database Folder

This folder contains everything that deals with your MySQL database.

## What goes here?

- The file that creates and exports the MySQL connection or connection pool.
- Optional helpers for running queries.
- SQL migration files if you add them later.

## Why separate this folder?

By keeping all database logic in one place, your controllers and services stay clean.  
Other parts of your app can simply import the database connection instead of setting it up themselves.

## Example files

- `connection.ts` — creates the MySQL connection.
- `queryHelper.ts` — optional helper that makes SQL queries easier.

## Notes for beginners

- The backend connects **once** to the database using the configuration in this folder.
- Every function that needs data (users, articles, etc.) uses this shared connection.
