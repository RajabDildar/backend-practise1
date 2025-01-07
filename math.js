const sum = (a, b) => a + b;
const mul = (a, b) => a + b;
const g = 9.8;
const PI = 3.14;

//one way
module.exports = {
  sum: sum,
  mul: mul,
  g: g,
  PI: PI,
};

//second way
module.exports.div = (a, b) => a / b;

//third way
module.exports.hello = () => console.log("hello!");
