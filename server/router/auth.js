const express = require("express");
const { UserService } = require("../service/user-service");
const { StatusCodes } = require("http-status-codes");
const authRouter = express.Router();

const userService = new UserService();

authRouter.post("/create-user", async (req, res, next) => {
    try {
        const user = await userService.signUp(req.body);
        return res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = { authRouter };
