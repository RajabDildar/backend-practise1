const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/relatonDemo");
};

main()
  .then(() => console.log("connected with mongodb"))
  .catch((err) => console.log(`can not connect with db! ${err}`));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  const user1 = new User({
    username: "user11",
    email: "user11@gmail.com",
  });

  const post1 = new Post({
    content: "Hello world!",
    likes: 7,
  });

  post1.user = user1;
  await user1.save();
  await post1.save();
};

addData();
