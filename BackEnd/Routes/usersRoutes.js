const express = require("express")

const router = express.Router();

const {login, register} = require("../Controllers/authController");

const {uploadprofileImage} = require("../Middlewares/UploadImage");

router.post("/register", uploadprofileImage, register);
router.post("/login", login);



module.exports = router;