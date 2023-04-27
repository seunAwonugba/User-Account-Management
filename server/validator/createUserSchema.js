const Joi = require("joi");

const createUserSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
        "any.required": "First name is required",
    }),
    lastName: Joi.string().trim().required().messages({
        "any.required": "Last name is required",
    }),
    email: Joi.string().trim().email().required().lowercase().messages({
        "string.email": "Please provide a valid email address",
        "any.required": "Email address is required",
    }),
    password: Joi.string().trim().required().messages({
        "any.required": "Password is required",
    }),
    repeat_password: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords do not match",
        "any.required": "Confirm password is required",
    }),
});

module.exports = { createUserSchema };
