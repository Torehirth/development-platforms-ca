# Interfaces

This folder contains TypeScript interfaces that define the shapes of data used throughout the application.  
Using interfaces helps ensure type-safety and consistent data handling when interacting with the MySQL database and when structuring request/response objects.

## Purpose

- Provide clear definitions for database entities (e.g., User, Article).
- Improve maintainability and readability of the codebase.
- Help your controllers, services, and routes avoid "any" types.

## Suggested interfaces

### `IUser`

Represents a user record stored in the `users` table.

### `IArticle`

Represents an article record stored in the `articles` table.

### `ILoginPayload`

Represents the body expected on login requests.

### `IRegisterPayload`

Represents the body expected on registration requests.

## Example structure (you will create the actual `.ts` files later)

interfaces/

├── user.interface.ts

├── article.interface.ts

├── auth.interface.ts

└── index.ts (optional barrel export)

## Notes

- Keep interfaces small, focused, and only containing required fields.
- Use optional fields (`field?: type`) for values that can be `NULL` or auto-generated (like timestamps).
- Ideally, interfaces should match your MySQL table schemas closely.
