const Joi = require("joi");

const userSchema = Joi.object({
    email: Joi.string().trim().required().email(),
    password: Joi.string().min(8).required(),
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    is_active: Joi.boolean(),
    last_login: Joi.Date().trim(),
    mfa_secret: Joi.string()
});

module.exports = userSchema;