# Backend Practice Repository

This repository is a personal learning project focused on backend development and the MERN stack. It contains small practice apps, code exercises, and examples that were built while learning how server-side development works in Node.js and Express.

## What this repo covers

The code in this repository is organized around practical backend concepts such as:

- Node.js basics
- Express.js fundamentals
- Middleware and routing
- Error handling
- File system operations
- Working with JSON data
- SQL database integration
- MongoDB and Mongoose
- Relationships between database collections
- Cookies and sessions
- REST API design patterns
- EJS templating

## Project structure

### Root-level files

These files are general practice examples and utility scripts:

- `math.js`, `math2.js` - basic module export/import examples
- `moduleExport.js`, `modExport2.js` - export patterns in Node.js
- `import.js` - ES module style usage
- `fs.js` - file system operations
- `process.js` - Node.js process examples
- `exp.js` - Express practice
- `middlewares.js`, `middlewares2.js` - middleware examples
- `ExpressError.js` - custom Express error handling
- `instaData.json`, `insta1.js`, `insta2.js` - sample data and mini exercises
- `hello.txt` - simple text file used in file handling examples

### `REST_CLASS/`

This folder contains a REST API learning project. It usually includes:

- Express server setup
- REST routes
- GET/POST/PUT/DELETE style patterns
- Views for rendering pages
- Static files in `public/`

### `SQL_CLASS/`

This folder focuses on SQL-based backend learning.

Typical contents include:

- `index.js` for the server
- `routing.js` for route definitions
- `schema.sql` for database schema
- `views/` for templates
- SQL query and database connection examples

### `MONGO/`

This folder is for MongoDB practice using Mongoose.

Typical contents include:

- database connection setup
- model/schema creation
- CRUD examples
- `books.js` for book-related exercises

### `MONGO2/`

This folder expands on MongoDB usage with Express, including more advanced examples such as:

- database relationships
- form handling
- method override patterns
- CRUD operations with a real app structure

### `RELATIONS/`

This folder focuses on MongoDB relationships and data modeling, including patterns like:

- referencing documents
- related collections
- population of related data
- relationship-based queries

### `cookiesAndSessions/`

This folder demonstrates browser state handling in backend apps.

It covers:

- cookies
- sessions
- login-like state management
- user tracking

### `Miscellaneous/`

This contains smaller experiments and extra code notes that do not fit into the main project categories.

### `copyFiles/`

This folder includes examples related to copying files and handling file input/output tasks.

### `fruits/`

This folder contains small practice code related to CRUD or data handling examples with fruits as sample data.

## Tech stack used

- Node.js
- Express.js
- MongoDB
- Mongoose
- SQL databases
- EJS templating
- JavaScript

## How to use this repo

Each folder is an independent learning exercise or mini-project. To explore one of them:

1. Open the folder you want to study.
2. Check its `package.json` file for dependencies.
3. Install dependencies with `npm install`.
4. Run the app using `node index.js` or a project-specific script.

You may find that some folders are mini experiments rather than complete production apps. That is expected in a learning repository.

## Purpose of this repository

This repo acts as a personal reference notebook for backend concepts. It is meant to help revisit ideas, practice patterns, and review examples whenever needed.

## Notes

- This project is for learning and experimentation.
- Some sections may be incomplete or intentionally minimal.
- The repository is best used as a practical reference rather than a finished production application.

## Author

RajabDildar
