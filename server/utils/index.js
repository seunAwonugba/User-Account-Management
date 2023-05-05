const jwt = require("jsonwebtoken");
const { Unauthenticated, BadRequest } = require("../error");
require("dotenv").config();

module.exports.GenerateToken = async (params) => {
    try {
        const token = jwt.sign(params, process.env.JWT_PRIVATE_KEY, {
            expiresIn: "1h",
        });
        return token;
    } catch (error) {
        return error;
    }
};

module.exports.VerifyToken = (accessToken) => {
    try {
        const token = jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);
        return token;
    } catch (error) {
        return error;
    }
};
