### User Account Management

This is a Node.js application that uses Express.js as the web framework and Sequelize as the ORM for database operations.

Getting Started

## Prerequisites

Node.js version 16.x.x or higher

## Built With

Express.js - Web Framework

Sequelize - ORM

## Installation

1. Clone the repository and navigate to the project directory
2. Run the following command to clone:

```bash
  git clone https://github.com/seunAwonugba/User-Account-Management.git
```

3. Create a `.env` file in the root directory and set the environment variables, see `.env.example` file for an example

## Database Configuration

This application uses PostgreSQL as its database. To configure the database, add the following environment variables to a .env file in the root directory of the project:

```bash
PG_HOST=localhost
PG_PORT=5432
PG_USER=database_username
PG_PASSWORD=database_password
PG_DB_DEV=database_development
PG_DB_TEST=database_test
PG_DB_PROD=database_production
PG_DIALECT=postgres
```

Replace database_username, database_password, database_development, database_test and database_production with your desired values.

## Install app dependencies

```bash
npm install
```

It will install all modules listed as dependencies in package.json

## Running the app

To start the application, first run the database migration script to create various table the application will need to store data

```bash
npm run db:refresh
```

Script to refresh database migrations with sequelize

## Start up the server

```bash
npm run dev
```

Script used to start the development server in watch mode

**Here's an explanation of why we used each of the tools and libraries listed under "Built With":**

## Express.js

Express.js is a popular and widely-used web framework for Node.js that makes it easy to build scalable and efficient web applications. It provides a lot of features out of the box, such as routing, middleware, and support for various HTTP methods. We used Express.js as the primary web framework for this project because it allows us to quickly build REST APIs with a minimal amount of boilerplate code.

## Sequelize

Sequelize is an Object-Relational Mapping (ORM) library for Node.js that provides an abstraction layer for interacting with relational databases. It allows us to write database queries using JavaScript instead of SQL, which makes it easier to manage database interactions and reduces the risk of SQL injection attacks. We used Sequelize in this project to interact with our PostgreSQL database.
