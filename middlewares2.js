// in this file, we will look at error handling in async functions
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const Chat = require("./MONGO2/models/chat");
const ExpressError = require("./ExpressError");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
};

main()
  .then((res) => console.log("connected with mongodb"))
  .catch((err) => console.log(err));

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("fakeWhatsapp.ejs", { chats });
});

//async wrap function is used to avoid writing try catch block again and again
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//show route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;

    const chat = await Chat.findById(id);
    if (!chat) {
      // throw new ExpressError(404, "chat not found");//this will not work and server will crash because this works for synchronous functions
      return next(new ExpressError(404, "chat not found!")); //if id length is same, then it will handle error. if id length is not recognized(more or less) by mongoose, then chat variable will get invalid value and there will be ejs template error(cast error). to handle this, we use try catch block
    } else {
      res.render("fakeWA.ejs", { chat });
    }
  })
);

app.use((err, req, res, next) => {
  let { status = 500, message = "some error occured!" } = err;
  res.status(status).send(message);
});

app.listen(2000, () => console.log("server started at 2000"));
