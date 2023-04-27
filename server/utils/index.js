const jwt = require("jsonwebtoken");
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
