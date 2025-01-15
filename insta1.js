const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/:userName", (req, res) => {
  let userName = req.params.userName;
  let followers = ["one", "two", "three"];
  console.log(userName);
  res.render("insta1", { userName, followers });
});

app.listen(3000);
