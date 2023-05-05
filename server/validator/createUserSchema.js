const Joi = require("joi");

const createUserSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
        "any.required": "First name is required",
        "string.empty": "First name cannot be empty",
    }),
    lastName: Joi.string().trim().required().messages({
        "any.required": "Last name is required",
        "string.empty": "Last name cannot be empty",
    }),
    email: Joi.string().trim().email().required().lowercase().messages({
        "string.email": "Please provide a valid email address",
        "any.required": "Email address is required",
        "string.empty": "Email address cannot be empty",
    }),
    password: Joi.string().trim().required().messages({
        "any.required": "Password is required",
        "string.empty": "Password cannot be empty",
    }),
    repeat_password: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords do not match",
        "any.required": "Confirm password is required",
        "string.empty": "Confirm password cannot be empty",
    }),
});

const emailSchema = Joi.object({
    email: Joi.string().trim().email().required().lowercase().messages({
        "string.email": "Please provide a valid email address",
        "any.required": "Email address is required",
        "string.empty": "Email address cannot be empty",
    }),
});

const resetPasswordSchema = Joi.object({
    password: Joi.string().trim().required().messages({
        "any.required": "Password is required",
        "string.empty": "Password cannot be empty",
    }),
    repeat_password: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords do not match",
        "any.required": "Confirm password is required",
        "string.empty": "Confirm password cannot be empty",
    }),
});

const loginSchema = Joi.object({
    email: Joi.string().trim().email().required().lowercase().messages({
        "string.email": "Please provide a valid email address",
        "any.required": "Email address is required",
        "string.empty": "Email address cannot be empty",
    }),
    password: Joi.string().trim().required().messages({
        "any.required": "Password is required",
        "string.empty": "Password cannot be empty",
    }),
});

module.exports = {
    createUserSchema,
    emailSchema,
    resetPasswordSchema,
    loginSchema,
};
