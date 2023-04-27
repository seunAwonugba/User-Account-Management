const express = require("express");

const { signUp } = require("../controller/auth");
const authRouter = express.Router();

authRouter.post("/create-user", signUp);

module.exports = { authRouter };
