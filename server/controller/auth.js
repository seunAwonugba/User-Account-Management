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
        console.log(user);
        res.status(StatusCodes.OK).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = { signUp, confirmEmail };
