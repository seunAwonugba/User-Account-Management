const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../service/user-service");

const userService = new UserService();

const signUp = async (req, res, next) => {
    try {
        const user = await userService.signUp(req.body);
        return res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
        next(error);
    }
};

const confirmEmail = async (req, res, next) => {
    try {
        const user = await userService.confirmEmail(req.query);
        res.status(StatusCodes.OK).json(user);
    } catch (error) {
        next(error);
    }
};

const sendPasswordResetLink = async (req, res, next) => {
    try {
        const user = await userService.sendPasswordResetLink(req.body);
        return res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
        next(error);
    }
};

const resetPassword = async (req, res, next) => {
    try {
        const data = await userService.resetPassword(
            { ...req.query },
            { ...req.body }
        );

        return res.status(StatusCodes.CREATED).json(data);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const data = await userService.login(req.body);

        return res.status(StatusCodes.OK).json(data);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    signUp,
    confirmEmail,
    sendPasswordResetLink,
    resetPassword,
    login,
};
