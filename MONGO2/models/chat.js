//we are creating model in this file
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
  msg: {
    type: String,
    require: true,
  },
  created_at: {
    type: Date,
    require: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
