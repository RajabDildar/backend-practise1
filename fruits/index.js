const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];
module.exports = fruits;
//this file name must be index.js because when fruits will be required by any file from fruit directory, this file will give information.
