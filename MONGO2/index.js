const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setting ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//setting middleware for method overriding
app.use(methodOverride("_method"));

//connecting with mongodb via mongoose
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

main()
  .then((res) => console.log("connected with mongodb"))
  .catch((err) => console.log(err));

/* //inserting data into db
const chat1 = new Chat({
  from: "Ahmed",
  to: "Ali",
  msg: "please send me exam sheets",
  created_at: new Date(),
});
chat1.save().then((res) => console.log(res)); */

//creating routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats/new", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({ from, to, msg, created_at: new Date() });
  newChat
    .save()
    .then((res) => console.log("saved!"))
    .catch((err) => console.log("error occured! new chat not saved"));
  res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.patch("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  await Chat.findByIdAndUpdate(id, { msg }, { runValidators: true });
  res.redirect("/chats");
});

//destroy route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(3000, () => console.log("server started"));
