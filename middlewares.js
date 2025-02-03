const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//middleware for all routes

// we have to write middlewares before creating routes

//logger
/* app.use((req, res, next) => {
  // console.log(req);
  console.log(`req.method = ${req.method}`);
  console.log(`req.hostname = ${req.hostname}`);
  console.log(`req.path = ${req.path}`);
  console.log(`req.query = ${req.query}`);
  console.log(`req.protocol = ${req.protocol}`);
  req.time = new Date(Date.now()).toString();
  console.log(`req.time = ${req.time}`);
  next();
}); */

/* app.use((req, res, next) => {
  console.log("hi, I am middleware ");
  return next(); //next function call krne se middleware ka kam khatam hone k bad request routes pr jae gi
}); */

/* app.use((req, res, next) => {
  console.log("hi, I am 2nd middleware");
  // console.log("req = ", req); //this req is an object and have many useful properties
  next(); //we can write code after calling next function. but it is not a good practise. that's why, we return this function.
}); */

//middleware for specific routes
app.use("/random", (req, res, next) => {
  console.log("Hi, I am only for random path");
  return next();
});

//authentication
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Access Denied!");
};

//routes

app.get("/", (req, res) => {
  res.send("hello! you are on / root");
});

app.get("/random", (req, res) => {
  res.send("hello! you are on /random root");
});

//passing middleware function in route
app.get("/api", checkToken, (req, res) => {
  res.send("Secret Data");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access for admin is forbidden");
});

//custom error handler
app.use((err, req, res, next) => {
  console.log("----------------err0r occured----------");
  let { status = 500, message = "Some Error Occured" } = err; //if status and message value is undefined, then we set their default value
  res.status(status).send(message); //sending custom error thrown by checktoken
  // next(err); //by passing err in next, next error handler middleware will be searched
});

//404
/* app.use((req, res) => {
  res.send("page not found!");
}); */

app.listen(8080);
