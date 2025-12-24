# Middlewares Folder

Middlewares are functions that run **before** your route handlers.

## What are they used for?

- Checking if a user is logged in
- Validating input (for example, making sure an email is included)
- Handling errors in a clean and consistent way
- Protecting routes so only logged-in users can access them

## Example middlewares

- `auth.middleware.ts` — checks if the request has a valid JWT
- `validation.middleware.ts` — makes sure required fields exist
- `error.middleware.ts` — handles errors from anywhere in the app
- `notFound.middleware.ts` — handles unknown routes

## Notes for beginners

Middlewares help keep routes clean.  
Instead of repeating the same checks in every route, the logic is reused.

They run in the order they are added in the route or app setup.
