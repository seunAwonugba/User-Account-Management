require("dotenv").config();
const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { sequelize } = require("./models/index");
const { authRouter } = require("./router/auth");
const cors = require("cors");

const app = express();
const port = 8000;
const host = "localhost";
const { errorMiddleware } = require("./middleware/errorMiddleware");
const { profileRouter } = require("./router/profile");
const { authMiddleware } = require("./middleware/authMiddleware");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data: ReasonPhrases.OK,
    });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/profile", authMiddleware, profileRouter);

app.use(errorMiddleware);

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
