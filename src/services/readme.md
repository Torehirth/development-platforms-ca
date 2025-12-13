# Services Folder

This is where the main logic of your application lives.

Controllers ask the service layer to:

- fetch users,
- create articles,
- validate passwords,
- run queries against the database.

## Why use services?

It keeps your code organized:

- controllers handle incoming HTTP requests,
- services handle logic and data operations.

## Example service tasks

- Hash a password.
- Verify login credentials.
- Run SQL queries for users or articles.
- Format data before sending it back.

## Notes for beginners

Services are the middle layer between your controllers and your database.  
They should be reusable and independent of Express.
