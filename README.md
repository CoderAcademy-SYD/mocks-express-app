# Mocks Application

An app which generates mocks and returns them to the client, while saving a collection of the mocks in a sqlite database.

## Usage

To install dependencies:

```shell
npm install
```

To start the server:

```shell
npm start
```

To create the database tables:

```shell
sqlite3 ./src/db/mocks.db < ./sql/create-tables.sql
```

## Guide

The `/src` folder contains:

- `/db` - folder containing a SQLite database
- `/helpers` - files for helper functions such as `mocks` which generate mock data
- `/models` - write and read entities to and from the database
- `/routes` - request handlers using the Express router which call on models to perform database operations, and return data to the client
- `/routes/router.js` - is an index for all routes in the application
- `/app.js` - contains express app object and application-wide middleware such as logging and security headers

The `/sql` folder contains:

- `create-tables.sql` - run this file to create the database schema
