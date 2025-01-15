const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/:username", (req, res) => {
  const instaData = require("./instaData.json");
  let data = instaData[req.params.username];
  if (data) {
    res.render("insta2", { data });
  } else {
    res.send("this account does not exist...");
  }
});

app.listen(3000);
