const express = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const cors = require("cors");

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

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
