const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password Is Required"],
        minlength: [6, "Password Must be at least 8 char"]
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    is_active:{
        type: Boolean,
        default: true,
    },
    last_login:{
        type: Date,
        default: null,
    },
    mfa_secret:{
        type: String,
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (matchedPassword) {
    return await bcrypt.compare(matchedPassword, this.password);
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;