//External Import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");


//Internal Import
const {notFoundHandler, errorHandler} = require("./middlewares/common/errorHandler")


const app = express();
dotenv.config();

//db connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set the view engine
app.set("view enhine", "ejs");

// set the static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//ROUTE setup

//Error Handling
app.use(notFoundHandler); //404
app.use(errorHandler); //common



//Port
app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
