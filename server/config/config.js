require("dotenv").config();
module.exports = {
    development: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB_DEV,
        host: process.env.PG_HOST,
        dialect: process.env.PG_DIALECT,
    },
    test: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB_TEST,
        host: process.env.PG_HOST,
        dialect: process.env.PG_DIALECT,
    },
    production: {
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DB_PROD,
        host: process.env.PG_HOST,
        dialect: process.env.PG_DIALECT,
    },
};
