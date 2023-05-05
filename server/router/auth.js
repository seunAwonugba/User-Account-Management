const express = require("express");

const {
    signUp,
    confirmEmail,
    sendPasswordResetLink,
    resetPassword,
    login,
} = require("../controller/auth");
const authRouter = express.Router();

authRouter.post("/create-user", signUp);
authRouter.get("/confirm-email", confirmEmail);
authRouter.post("/send-password-reset-link", sendPasswordResetLink);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/login", login);


module.exports = { authRouter };
