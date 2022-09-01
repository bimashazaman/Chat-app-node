//External Import
const express = require("express");

//internal Export
const {getInbox} = require('../controller/inboxController')

const router = express.Router();

//Login page
router.get("/", getInbox);

//export
module.exports = router;
