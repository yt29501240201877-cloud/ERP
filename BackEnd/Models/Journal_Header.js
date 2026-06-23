const mongoose = require("mongoose")

const journal_hShema = new mongoose.Schema({
    journal_number: {

    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["DRAFT", "POSTED", "REVERSED"],
        required: true 
    },
    period: {
        type:mongoose.Schema.ObjectId,
        ref:'Accounting_Periods',
        required: true
    }
});

const Journal_Header = mongoose.model("Journal_Header", journal_hShema);

module.exports = Journal_Header;
