const mongoose = require("mongoose");
//the url is just like any other url ("https://localhost:8080/home") ("mongodb://127.0.0.1:27017/test")
// mongoose.connect is an async function (give promise)

// ------------------------------------------------connecting with mongodb-------------------------------------------------

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
};

main().then((res) => console.log("connection successfull"));

// -----------------------------------------------creating data----------------------------------------------------------

//creating schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//creating schema
const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//creating collections Syntax --> const Model = mongoose.model("Collectionname",Schema)
// model is actually a class

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", employeeSchema);

//collection name and model name should be same, start with capital letter and singular (i.e, "Employee" not employees). mongoDb will automatically make collection name start with with small letter and plural i.e, employees

// -------------------------------------------inserting data-------------------------------------------------

// inserting data into mongodb
const user4 = new User({
  name: "jack",
  email: "jack@gmail.com",
  age: 48, //id will be automatically given by mongoose
}); //created instance

//saving into mongodb (.save is an async function i.e, return promise)
/* user4
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.insertMany([
  {
    name: "adam1",
    email: "adam1@gmail.com",
  },
  {
    name: "adam2",
    email: "adam2@gmail.com",
  },
  {
    name: "adam3",
    email: "adam3@gmail.com",
  },
  {
    name: "adam4",
    email: "adam4@gmail.com",
  },
]); */

// ------------------------------------------------reading data--------------------------------------------------

//find returns a query. we can apply .then on it
/* User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.find({ name: "Adam" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.findOne({ _id: "6798a8de5bdce7aba2d3e104" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

User.findById("6798a8de5bdce7aba2d3e104")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// --------------------------------------updating data------------------------------------------------

/* User.updateOne({ name: "Adam" }, { age: 55 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.updateMany({ name: "jack" }, { name: "jack1" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.findOneAndUpdate({ name: "Eve" }, { age: 22 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.findOneAndUpdate({ name: "adam2" }, { age: 22 }, { new: true }) // by passing new option as true,updated value(document) will be given in res
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.findByIdAndUpdate(
  "6798a40267cc6ef1b03a6a13",
  { email: "adam2@hello.com" },
  { new: true }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

// ----------------------------------------------deleting data-------------------------------------------------

/* User.deleteOne({ name: "adam3" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.deleteMany({ age: 48 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* User.findByIdAndDelete("6798a8de5bdce7aba2d3e104")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  }); */
