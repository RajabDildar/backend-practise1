const express = require("express");
const app = express();
const path = require("path");

//for form data reading (setting up parser for forms)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public"))); //this line says that for every request, all static files should be found in public folder
//path.join("__dirname","/public") gives public folder path in which static files are present. (it do same work as __dirname+"public").

// setting ejs for ejs pages
// install ejs package from npm
//set ejs as a view engine
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
  res.render("index"); //the ejs file in views is given to show on page
});

app.get("/", (req, res) => {
  res.send("on / path");
});

//dynamic routing
app.get("/:userName", (req, res) => {
  console.log(req.params.userName);
  res.send(`hi ${req.params.userName}`);
});

app.get("/:userName/:age", (req, res) => {
  console.log(req.params.userName);
  res.send(`hi ${req.params.userName} of age ${req.params.age}`);
});

app.listen(3000, () => {
  console.log("server is running!");
});
