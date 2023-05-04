const express = require("express");

const { signUp, confirmEmail } = require("../controller/auth");
const authRouter = express.Router();

authRouter.post("/create-user", signUp);
authRouter.get("/confirm-email", confirmEmail);

module.exports = { authRouter };
