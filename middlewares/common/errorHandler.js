const createError = require("http-errors");

//404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Content not found"));
}

//default error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  //html response
  if (res.locals.html) {
    res.render("error.ejs", {
      title: "Error page",
    });
  } //json response 
  else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
