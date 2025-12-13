# Interfaces Folder

This folder contains TypeScript interfaces that describe what your data looks like.

## Why is this important?

Interfaces help TypeScript understand:

- what a user object contains,
- what an article object contains,
- what a request body should look like.

This prevents bugs and makes the code easier to write.

## Examples of interfaces you might have

- `IUser` — matches your users table.
- `IArticle` — matches your articles table.
- `ILoginRequest` — describes the expected login body.
- `IRegisterRequest` — describes the expected registration body.

## Notes for beginners

Interfaces never create real code in JavaScript — they only help TypeScript check your work.

They are especially helpful for SQL projects because your table structure becomes easier to understand.
