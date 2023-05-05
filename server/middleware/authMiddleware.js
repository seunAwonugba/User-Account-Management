require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../error");

const authMiddleware = async (req, res, next) => {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Unauthenticated("Auth token is required for this route");
    }

    const token = authHeader.split(" ")[1].trim();

    try {
        //verify you got the correct token, it returns the obj in your signed token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        //if verification is successfully, set up a property on the request object, call it user, and pass it to the next middleware which it the next route after logging in

        //req.user can be accessed in any route that is authenticated
        req.user = {
            id: decode.id,
            name: decode.name,
            email: decode.email,
        };
        next();
    } catch (err) {
        throw new Unauthenticated("Invalid or expired token");
    }
};

//export it to all the routes you want to authenticate
module.exports = { authMiddleware };
