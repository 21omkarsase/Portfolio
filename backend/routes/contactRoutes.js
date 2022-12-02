const express = require("express");
const { saveMessage } = require("../controllers/contactController");
const router = express.Router();

router.route("/contact").post(saveMessage);

module.exports = router;
