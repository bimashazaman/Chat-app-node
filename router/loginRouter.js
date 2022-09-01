//External Import
const express = require("express");

//internal Export
const {getLogin} = require('../controller/loginController')

const router = express.Router();

//Login page
router.get("/", getLogin);

//export
module.exports = router;
