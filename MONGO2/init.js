//this file adds sample data in database
const mongoose = require("mongoose");
const Chat = require("./models/chat");

//connecting with mongodb via mongoose
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

main()
  .then((res) => console.log("connected with mongodb"))
  .catch((err) => console.log(err));

const allChats = [
  {
    from: "Ahmed",
    to: "Ali",
    msg: "Please send me the exam sheets.",
    created_at: new Date(),
  },
  {
    from: "Sarah",
    to: "John",
    msg: "Did you finish the project report?",
    created_at: new Date(),
  },
  {
    from: "Karan",
    to: "Priya",
    msg: "Let's meet for lunch tomorrow.",
    created_at: new Date(),
  },
  {
    from: "Ravi",
    to: "Sneha",
    msg: "Can you share the meeting notes?",
    created_at: new Date(),
  },
  {
    from: "Maya",
    to: "Vikram",
    msg: "Please confirm your attendance at the seminar.",
    created_at: new Date(),
  },
  {
    from: "Alok",
    to: "Neha",
    msg: "Don't forget to submit your assignment.",
    created_at: new Date(),
  },
  {
    from: "Riya",
    to: "Ajay",
    msg: "Can we reschedule our meeting?",
    created_at: new Date(),
  },
  {
    from: "Aditya",
    to: "Simran",
    msg: "Have you completed the presentation?",
    created_at: new Date(),
  },
  {
    from: "Nitin",
    to: "Geeta",
    msg: "Need your feedback on the report.",
    created_at: new Date(),
  },
  {
    from: "Tara",
    to: "Mohit",
    msg: "Thanks for your help yesterday!",
    created_at: new Date(),
  },
  {
    from: "Kunal",
    to: "Isha",
    msg: "Can you send me the files?",
    created_at: new Date(),
  },
  {
    from: "Rajesh",
    to: "Deepa",
    msg: "Let's brainstorm some ideas.",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Tarun",
    msg: "Great job on the presentation!",
    created_at: new Date(),
  },
  {
    from: "Neha",
    to: "Vikas",
    msg: "Can you review my code?",
    created_at: new Date(),
  },
  {
    from: "Simran",
    to: "Rahul",
    msg: "What time are we meeting?",
    created_at: new Date(),
  },
  {
    from: "Pooja",
    to: "Dev",
    msg: "Please verify the data entries.",
    created_at: new Date(),
  },
  {
    from: "Siddharth",
    to: "Sheetal",
    msg: "Check out this article!",
    created_at: new Date(),
  },
  {
    from: "Isha",
    to: "Nitin",
    msg: "Let’s discuss the new strategy.",
    created_at: new Date(),
  },
  {
    from: "Vikram",
    to: "Ravi",
    msg: "How's the project going?",
    created_at: new Date(),
  },
  {
    from: "Tarun",
    to: "Ajay",
    msg: "Can you update me on the status?",
    created_at: new Date(),
  },
  {
    from: "Amit",
    to: "Maya",
    msg: "Thanks for your support!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
