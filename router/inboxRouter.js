//External Import
const express = require("express");

//internal Export
const {getInbox} = require('../controller/inboxController')
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");


const router = express.Router();

//Login page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

//export
module.exports = router;
