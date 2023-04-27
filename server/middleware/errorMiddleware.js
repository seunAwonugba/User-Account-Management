const { CustomErrorHandler } = require("../error");
const { StatusCodes } = require("http-status-codes");

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof CustomErrorHandler) {
        console.log(`custom error middleware -> ${err}`);
        return res.status(err.statusCode).json({
            success: false,
            data: err.message,
        });
    }

    // console.log(`Sequelize error -> ${err}`);
    if (err.name === "SequelizeUniqueConstraintError") {
        return res.status(StatusCodes.CONFLICT).json({
            success: false,
            data: err.errors[0].message,
        });
    }

    // console.log(`Joi error -> ${err}`);
    if (err.isJoi == true) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            success: false,
            data: err.details[0].message,
        });
    }

    console.log(`server error middleware -> ${err}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        data: err.message.split(":")[2] || "Unknown error occurred",
    });
};

module.exports = { errorMiddleware };
