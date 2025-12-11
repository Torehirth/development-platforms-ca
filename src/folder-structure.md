project-root/

│

├── README.md ← Main project documentation (capitalized)

├── package.json

├── tsconfig.json

├── .env ← Environment variables (NEVER commit this)

├── .gitignore

│

├── src/

│ ├── app.ts ← Express app setup

│ ├── server.ts ← Server start file

│ │

│ ├── config/

│ │ ├── readme.md

│ │ ├── database.config.ts

│ │ └── env.config.ts

│ │

│ ├── database/

│ │ ├── readme.md

│ │ ├── connection.ts ← MySQL connection/pool

│ │ └── queryHelper.ts

│ │

│ ├── interfaces/

│ │ ├── readme.md

│ │ ├── user.interface.ts

│ │ ├── article.interface.ts

│ │ └── auth.interface.ts

│ │

│ ├── middlewares/

│ │ ├── readme.md

│ │ ├── auth.middleware.ts

│ │ ├── validation.middleware.ts

│ │ ├── error.middleware.ts

│ │ └── notFound.middleware.ts

│ │

│ ├── routes/

│ │ ├── readme.md

│ │ ├── index.ts ← Collects all route files

│ │ ├── auth.routes.ts

│ │ ├── users.routes.ts

│ │ └── articles.routes.ts

│ │

│ ├── controllers/

│ │ ├── readme.md

│ │ ├── auth.controller.ts

│ │ ├── users.controller.ts

│ │ └── articles.controller.ts

│ │

│ ├── services/

│ │ ├── readme.md

│ │ ├── auth.service.ts

│ │ ├── users.service.ts

│ │ └── articles.service.ts

│ │

│ ├── utils/

│ │ ├── readme.md

│ │ ├── hash.util.ts ← password hashing

│ │ ├── token.util.ts ← JWT generation

│ │ └── response.util.ts ← formatted API responses

│ │

│ └── types/ (optional)

│ ├── express.d.ts ← Extending Express types

│ └── index.d.ts

│

└── sql/ ← OPTIONAL: SQL dump files or migration scripts

    ├── schema.sql

    └── seed.sql
