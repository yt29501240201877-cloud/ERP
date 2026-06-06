const Users = require("../Models/Users")
const loginSchema = require("./Validation/userValidation")
const jwt = require('jsonwebtoken');

const login = async (req , res) =>{
     try {

        const {error, value} = loginSchema.validate(req.body, {abortEarly: false, stripUnknown: true})

        if(error) return res.status(400).json({msg: error.details.map(err => err.message)})

        const {email, password} = value;

        const user = await Users.findOne({email})

        if(!user) return res.status(400).json({msg: "Invalid Email or Password"})

        const matchedPassword = await user.comparePassword(password);

        if(!matchedPassword) return res.status(400).json({msg: "Invalid Email or Password"})

        const token = jwt.sign({id:user._id}, process.env.Secret_Key, {expiresIn: "1d", algorithm: "HS256"})

        res.status(200).json({msg: "Success Login", token})

    } catch (error) {
        res.status(500).json({msg: "Server Error", error: error.message});
    }
}

module.exports = login;
