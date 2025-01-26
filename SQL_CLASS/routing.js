const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
var methodOverride = require("method-override");

//setting ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//method overriding of forms
app.use(methodOverride("_method"));

const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "inboxing88",
});

app.get("/", (req, res) => {
  try {
    connection.query("SELECT username FROM user", (error, result) => {
      if (error) throw error;
      res.render("index.ejs", { result });
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/user", (req, res) => {
  try {
    connection.query("SELECT username,id,email FROM user", (error, result) => {
      if (error) throw error;
      res.render("user.ejs", { result });
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = "SELECT id,username FROM user WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (result.length == 0) {
      res.send("please write valid id to edit your username");
    } else {
      let userId = result[0].id;
      let username = result[0].username;
      res.render("edit.ejs", { userId, username });
    }
  });
});

app.patch("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = "UPDATE user SET username = ? WHERE id = ?";
  let { newUsername } = req.body;
  console.log(newUsername);
  connection.query(q, [newUsername, id], (err, result) => {
    console.log(result);
  });
  res.send("Congratulations! you have changed your username successfully");
});

app.get("/signup", (req, res) => {
  res.render("addUser.ejs");
});

app.post("/signup", (req, res) => {
  let { username, email, password } = req.body;
  let id = getRandomUser()[0];
  let q = "INSERT INTO user(id, username, email, password) VALUES (?,?,?,?)";
  connection.query(q, [id, username, email, password]);
  res.send("congratulations!you signed up");
});

app.get("/user/:id", (req, res) => {
  let { id } = req.params;
  res.render("remove.ejs", { id });
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let q = "DELETE FROM user WHERE id = ?";
  connection.query(q, [id]);
  res.send("you deleted your Account successfully");
});

// connection.end();

app.listen(3000, () => console.log("app is listening..."));
