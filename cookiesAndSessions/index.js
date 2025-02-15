const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
//cookie-parser helps to access cookies at every route

app.use(cookieParser("secretcode"));

app.get("/", (req, res, next) => {
  res.cookie("madeIn", "Pakistan");
  res.cookie("Greet", "Hello!", { signed: true });
  res.cookie("name", "Rajab", { signed: true });
  res.send(`Hi on root`);
});

app.get("/name", (req, res) => {
  res.send(`Hi ${req.signedCookies.name}`);
});

app.get("/country", (req, res) => {
  res.send(`Hi ${req.cookies.madeIn}`);
});

app.get("/greet", (req, res) => {
  res.send(`${req.signedCookies.Greet}`);
});

app.listen(8080, () => {
  console.log("server started");
});
