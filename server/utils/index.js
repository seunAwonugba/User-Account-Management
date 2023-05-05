const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
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

module.exports.ComparePasswords = async (string, hash) => {
    try {
        const comparePasswords = await bcryptjs.compare(string, hash);
        return comparePasswords;
    } catch (error) {
        return error;
    }
};
