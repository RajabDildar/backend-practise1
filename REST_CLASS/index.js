const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

//setting up ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//setting static files
app.use(express.static(path.join(__dirname, "public")));

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//method overriding of forms
app.use(methodOverride("_method"));

//posts data
let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "learning RESTful APIs today!",
  },
  {
    id: uuidv4(),
    username: "RajabAli",
    content: "I have got my first internship!",
  },
  {
    id: uuidv4(),
    username: "Asad",
    content: "hello everyone! what's up...",
  },
];

app.get("/posts", (req, res) => {
  res.render(`index.ejs`, { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("newPost.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("showPost.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("editPost.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  let newContent = req.body.content;
  post.content = newContent;
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

app.listen(3000);
