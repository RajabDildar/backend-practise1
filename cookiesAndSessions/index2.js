//here I've practised cookies, session, flash messages, e.t.c
//to use sessions => require session, set session function as middleware and pass session options in it. (by using express-session, a sessionId will be created for a session)
const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const flash = require("connect-flash");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//the session id is a signed cookie
//the secret option is required in session function(when we use it as a middleware). secret should not be easily parsed by humans
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

//flash messages
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success"); //local variables can be accessed in ejs template pages.
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/reqcount", (req, res) => {
  req.session.count ? req.session.count++ : (req.session.count = 1);
  res.send(`You sent a req ${req.session.count} times`);
});

app.get("/register", (req, res) => {
  let { name = "Anonymous" } = req.query;
  req.session.name = name;
  name === "Anonymous"
    ? req.flash("error", "User not registered!")
    : req.flash("success", "User registered successfully!");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // console.log(req.session);
  // console.log(req.flash("success"));
  res.render("page1.ejs", { name: req.session.name });
});

app.get("/test", (req, res) => {
  res.send("test successful!");
});

app.listen(8080, () => {
  console.log("server started");
});
