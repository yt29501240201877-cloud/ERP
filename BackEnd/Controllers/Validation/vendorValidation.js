const Joi = require("joi");
const { model } = require("mongoose");

const vendorSchema = Joi.object({
    // name: Joi.string().required(),
    // type: Joi.string().valid("ASSET", "LIABILITY", "EQUITY", "REVENUE", "EXPENSE").required(),
    // subtype: Joi.string().valid("current_asset", "long_term_liability").required(),
    // is_control: Joi.boolean(),
    // normal_balance: Joi.string().valid("DEBIT" , "CREDIT").required()
})

module.exports = {vendorSchema};