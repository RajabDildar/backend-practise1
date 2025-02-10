const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/relatonDemo");
};

main()
  .then(() => console.log("connected with mongodb"))
  .catch((err) => console.log(`can not connect with db! ${err}`));

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model(`Order`, orderSchema);
const Customer = mongoose.model(`Customer`, customerSchema);

const addOrders = async () => {
  let result = await Order.insertMany([
    { item: `chips`, price: 50 },
    { item: `samosa`, price: 40 },
    { item: `pizza`, price: 500 },
  ]);

  console.log(result);
};

// addOrders();

const addCustomers = async () => {
  let cust1 = new Customer({
    name: "Ahmed",
  });

  let order1 = await Order.findOne({ item: "chips" });
  let order2 = await Order.findOne({ item: "samosa" });

  cust1.orders.push(order1);
  cust1.orders.push(order2);
  let result = await cust1.save();

  console.log(result); //in database, only objectid of orders will be saved (not whole object)
};

// addCustomers();

const findCustomers = async () => {
  let allCustomers = await Customer.find();
  console.log(allCustomers);
};

// findCustomers();

//using populate for details of orders (we use populate when we need details instead of reference)
const findCustomers2 = async () => {
  let allCustomers = await Customer.find().populate("orders");
  console.log(allCustomers[0]);
};

// findCustomers2();
