# Middlewares Folder

Middlewares are functions that run **before** your route handler.

## What are they used for?

- Checking if a user is logged in.
- Validating input (e.g., making sure "email" is included).
- Handling errors in a clean and consistent way.
- Protecting routes (only logged-in users allowed).

## Example middlewares

- `auth.middleware.ts` — checks if the request has a valid token.
- `validation.middleware.ts` — makes sure required fields exist.
- `error.middleware.ts` — handles errors from anywhere in the app.
- `notFound.middleware.ts` — handles unknown routes.

## Notes for beginners

Middlewares make your routes cleaner.  
Instead of writing the same checks everywhere, you reuse the middleware.

They run in the order you place them in your route file.
