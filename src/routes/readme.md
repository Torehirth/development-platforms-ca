# Routes Folder

This folder defines the API endpoints that the frontend (or other clients) can call.

Examples:

- `GET /users`
- `POST /articles`
- `POST /auth/login`

## What goes here?

Each file groups routes by feature or topic:

- `auth.routes.ts` — login and registration
- `users.routes.ts` — user-related endpoints
- `articles.routes.ts` — fetching and creating articles

## How does it work?

Each route file typically:

1. Imports `express.Router()`
2. Defines URL paths (like `/login`)
3. Connects those paths to handlers or controllers
4. Optionally applies middleware (for example, authentication)

## Notes for beginners

Routes should stay simple.  
They should not contain business logic.

Think of routes as a map:

- “When someone visits `/login`, run this function.”
