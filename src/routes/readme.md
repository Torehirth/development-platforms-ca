# Routes Folder

This folder defines the API endpoints that the frontend will call.

Example:

- `GET /users`
- `POST /articles`
- `POST /auth/login`

## What goes here?

Each file groups routes by topic:

- `auth.routes.ts` — login, register.
- `users.routes.ts` — get user profile, etc.
- `articles.routes.ts` — fetch or create articles.

## How does it work?

Each route file:

1. Imports `express.Router()`.
2. Defines paths (like `/login`).
3. Calls controller functions.
4. Optional: applies middleware.

## Notes for beginners

Routes should not contain logic.  
They should only "connect" URLs to controllers.

Think of routes as a map:

- "When someone visits `/login`, run this function."
