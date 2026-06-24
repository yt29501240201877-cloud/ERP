const express = require("express")

const router = express.Router();

const authenticate = require("../Middlewares/authenticate");
const authorize = require("../Middlewares/authorize");

const {addjourline} = require("../Controllers/journal_linesController")

router.post("/add",  addjourline);
// router.get("/acc_periods", authenticate, authorize("Admin"), getallaccperiods);
// router.patch("/status/:id", authenticate, authorize("Admin"), updatestatus);
// router.delete("/:id", authenticate, authorize("Admin"), deleteaccount);

module.exports = router;