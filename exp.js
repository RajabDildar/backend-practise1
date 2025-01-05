const express = require("express");
const app = express();

//middleware for all routes
app.use((req, res, next) => {
  console.log("middleware chala");
  next(); //next function call krne se middleware ka kam khatam hone k bad request routes pr jae gi
});

app.use((req, res, next) => {
  console.log("middleware chala again!");
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("hey!you are on / path");
});

app.get("/secPath", (req, res) => {
  res.send("hello! you are on second path");
});

//error handling
app.get("/profile", (req, res, next) => {
  return next(new Error("something went wrong!")); //this will show at console
});

//error handler written at end of file
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke! check your connection"); //this will show on frontend
});

//running server
app.listen(3000);
