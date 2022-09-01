//External Import
const express = require("express");

//internal Export
const {getUsers} = require('../controller/usersController')
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");


const router = express.Router();

//Login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

//export
module.exports = router;
