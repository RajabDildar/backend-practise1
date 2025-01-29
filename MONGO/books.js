const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
};

main()
  .then((res) => console.log("connection successfull"))
  .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    // min: 1,
    min: [1, "Price is too low for amazon selling"], //defining custom errors in the array which can be displayed in errors
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

/* const book1 = new Book({
  title: "Physics XII",
  author: "Fahad",
  price: 799,
});

book1.save().then((res) => console.log(res)); */

// all the schema validations are followed at the time of insertion and can be overrided at the time of updation.to ensure schema validations work on updation, we have to set runValidators as true in options

Book.findByIdAndUpdate(
  "6799b93824a99d5c817d98df",
  { price: -500 },
  { runValidators: true } //this ensures validations in schema
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
