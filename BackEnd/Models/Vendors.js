const mongoose = require("mongoose")

const vendorSchema = new mongoose.Schema({
    Vendor_number:{

    },
    name:{
        type: String,
        required: true
    },
    tax_id: {
        type: String,
        required: true
    },
    payment_terms: {
        type: String,
        required: true,
        enum: ["NET30", "NET60", "IMMEDIATE"]
    },
    credit_limit: {
        type: Number,
    },
    status:{
        type: String,
        required: true,
        enum: ["ACTIVE", "INACTIVE", "BLOCKED"]
    }
})

const Vendors = mongoose.model("Vendors", vendorSchema);

module.exports = Vendors;