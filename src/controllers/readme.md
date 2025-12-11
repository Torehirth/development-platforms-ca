# Controllers Folder

Controllers contain the functions that run when a route is called.

Example:

- When `POST /auth/login` is called → `loginController()` runs.
- When `GET /articles` is called → `getArticlesController()` runs.

## Why controllers?

They let you keep routes simple and avoid long messy callback functions.

## What should controllers do?

- Handle incoming data.
- Call the service layer.
- Return the final response to the user.

## What should controllers NOT do?

- Directly talk to the database — that belongs in the services folder.
- Contain long business logic.

## Notes for beginners

Think of controllers as “traffic managers”:  
They take the request → ask the service for help → return a response.
