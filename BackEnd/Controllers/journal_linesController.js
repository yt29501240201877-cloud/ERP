const Journal_lines = require("../Models/Journal_lines")
const mongoose = require("mongoose")
const {journal_lShema} = require("../Controllers/Validation/journal_linesValidation")

const addaccperiod = async (req, res) => {
    try {
        const {error, value} = journal_lShema.validate(req.body, {abortEarly: false, stripUnknown: true})

        const {debit_amount, credit_amount, description, journal_id, glaccount_id} = value

        if(error) return res.status(400).json({msg: error.details.map(err => err.message)})

        const existaccount = await Accounting_Periods.findOne({start_date, end_date})

        if(existaccount) return res.status(400).json({msg: "Account Period Already Exist"})

        const account = await Accounting_Periods.create({name, start_date, end_date, closed_at, status, closed_by})

        res.status(201).json({msg: "Account Period Created Successfully", data: account})

    } catch (error) {
        res.status(500).json({msg: "Server Error", error: error.message});
    }
}