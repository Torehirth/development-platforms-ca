# Interfaces Folder

This folder contains TypeScript interfaces that describe the shape of the data used in the application.

## Why is this important?

Interfaces help TypeScript understand:

- what a user object contains
- what an article object contains
- what a request body is expected to look like

This helps prevent bugs and makes the code easier to read and write.

## Examples of interfaces

- `IUser` — matches the users table
- `IArticle` — matches the articles table
- `ILoginRequest` — describes the login request body
- `IRegisterRequest` — describes the registration request body

## Notes for beginners

Interfaces do not exist in the final JavaScript output.  
They are only used by TypeScript during development.

For SQL-based projects, interfaces make it easier to keep the code and database structure in sync.
