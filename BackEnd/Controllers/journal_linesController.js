const Journal_lines = require("../Models/Journal_lines")
const GlAccount = require("../Models/GlAccounts")
const Journal_Header = require("../Models/Journal_Header")
const mongoose = require("mongoose")
const {journal_lShema} = require("../Controllers/Validation/journal_linesValidation")

const addjourline = async (req, res) => {
    try {
        const {error, value} = journal_lShema.validate(req.body, {abortEarly: false, stripUnknown: true})

        const {debit_amount, credit_amount, description, journal_id, glaccount_id} = value

        const existjournalH = await Journal_Header.findById({journal_id})

        if(existjournalH) return res.status(400).json({msg: "Journal Header Isn't Exist"})

        const existglaccount = await GlAccount.findById({glaccount_id})

        if(existglaccount) return res.status(400).json({msg: "GL Account Isn't Exist"})    

        const journal_line = await Journal_lines.create({debit_amount, credit_amount, description, journal_id, glaccount_id})

        res.status(201).json({msg: "Journal Line Created Successfully", data: journal_line})

    } catch (error) {
        res.status(500).json({msg: "Server Error", error: error.message});
    }
}

module.exports = {addjourline};