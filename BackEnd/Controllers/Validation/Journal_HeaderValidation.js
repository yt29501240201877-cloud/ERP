const Joi = require("joi");
const { model } = require("mongoose");

const journal_hShema = Joi.object({
    journal_number: Joi.string().required(),
    date: Joi.string().required(),
    description: Joi.string().required(),
    source: Joi.string().required(),
    status: Joi.string().valid("OPEN", "CLOSED", "LOCKED").required(),
    period: Joi.string().required()
})

module.exports = {journal_hShema};