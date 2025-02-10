const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/relatonDemo");
};

main()
  .then(() => console.log("connected with mongodb"))
  .catch((err) => console.log(`can not connect with db! ${err}`));

/* //other way of defining address schema seperately
const addressSchema = new mongoose.Schema(
  {
    location: String,
    city: String,
  },
  { _id: false }
); */

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  addresses: [
    {
      location: String,
      city: String,
      _id: false, //this should be written at end of address schema (i.e, after location and city)
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
  const user1 = new User({
    username: `Ahmed`,
    addresses: [
      {
        location: `221B Bakers street`,
        city: `London`,
      },
    ],
  });

  user1.addresses.push({
    location: `Saddar cantt`,
    city: `Lahore`,
  });

  const result = await user1.save();
  console.log(result);
};

addUser();
