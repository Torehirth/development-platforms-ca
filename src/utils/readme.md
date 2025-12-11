# Utils Folder

This folder contains small helper functions used across the project.

Examples:

- password hashing helpers
- token creation functions
- input sanitizing helpers
- reusable error builders

## Why have a utils folder?

Keeps your controllers and services clean.  
If a function is generic and not tied to any specific feature, put it here.

## Notes for beginners

If you find yourself copying a function between files, it probably belongs in `utils`.
