const express = require("express");
const app = express();

//middleware for all routes
app.use((req, res, next) => {
  console.log("middleware chala");
  return next(); //next function call krne se middleware ka kam khatam hone k bad request routes pr jae gi
});

app.use((req, res, next) => {
  console.log("middleware chala again!");
  // console.log("req = ", req); //this req is an object and have many useful properties
  next(); //we can write code after calling next function. but it is not a good practise. that's why, we return this function.
});

//routes
app.get("/", (req, res) => {
  res.send("hey!you are on / path");
});

app.get("/secPath", (req, res) => {
  res.send("hello! you are on second path"); //in response, we can send anything like object, array e.t.c
});

app.get("/thirdPath", (req, res) => {
  res.send({
    fruit: "apple",
    color: "red",
  }); //in response, we can send anything like object, array e.t.c
});

app.get("/fourPath", (req, res) => {
  res.send([1, 2, 3, 4, 5]); //in response, we can send anything like object, array e.t.c
});

app.get("/fivePath", (req, res) => {
  let code = "<h1>heading</h1><p>paragraph</p>";
  res.send(code); //in response, we can send anything like object, array e.t.c
});

//path parameters
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`please enter a query to search`);
  }
  console.log(q);
  res.send(`you searched for query: ${q}`);
});

//for all paths that are not specified
app.get("*", (req, res) => {
  res.send("hello!please enter a valid path...");
});

//post request
app.post("/", (req, res) => {
  res.send("you sent a post request on root");
});

//error handling (if no response)
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
