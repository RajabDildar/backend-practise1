const express = require("express");
const app = express();

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`standard GET response. welcome ${username}!`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send(`standard POST response. welcome ${username}!`);
});

app.listen(3000);
