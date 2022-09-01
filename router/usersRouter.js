//External Import
const express = require("express");

//internal Export
const {getUsers} = require('../controller/usersController')

const router = express.Router();

//Login page
router.get("/", getUsers);

//export
module.exports = router;
