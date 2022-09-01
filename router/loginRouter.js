//External Import
const express = require("express");

//internal Export
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//Login page
router.get("/", decorateHtmlResponse("login"), getLogin);

//export
module.exports = router;
