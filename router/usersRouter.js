//External Import
const express = require("express");

//internal Export
const {getUsers} = require('../controller/usersController')
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require('../middlewares/users/avatarUpload')
const {addUserValidators, addUserValidationHandler} = require('../middlewares/users/userValidators')

const router = express.Router();

//Login page
router.get("/", decorateHtmlResponse("Users"), getUsers);
router.post("/", avatarUpload, addUserValidators);



//export
module.exports = router;
