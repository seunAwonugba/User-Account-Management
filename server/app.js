require("dotenv").config();
const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const cors = require("cors");

const { sequelize } = require("./models/index");

const app = express();
const port = process.env.PORT || 8000;
const host = process.env.HOST || "localhost";

app.use(cors);

app.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data: ReasonPhrases.OK,
    });
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log(
            "⚡️[database]: Database connection has been established successfully."
        );

        app.listen(port, host, () => {
            console.log(
                `⚡️[server]: Server is listening on http://${host}:${port}`
            );
        });
    } catch (error) {
        console.error(
            "😥 [database]: Unable to connect to the database:",
            error
        );
    }
};

startServer();
