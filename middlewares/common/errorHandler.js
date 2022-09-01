const createError = require("http-errors");

//404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Content not found"));
}

//default error handler
function errorHandler(err, req, res, next) {
    res.render("error.ejs", {
        title: "Error Page",

    })
}

module.exports = {
    notFoundHandler,
    errorHandler
}
