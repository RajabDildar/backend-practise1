const mathJS = require("./math");

console.log(mathJS);
console.log(mathJS.sum(9, 9));
console.log(mathJS.div(9, 9));
console.log(mathJS.hello());
//As we are using require, this file will give error if we use "type" : "module" in package.json
//to use it, remove "type" : "module" from package.json
