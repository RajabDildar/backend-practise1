let comingInfo = require("./fruits");
console.log(comingInfo);
console.log(comingInfo[0].name);
console.log(comingInfo[1].name);
//As we are using require, this file will give error if we use "type" : "module" in package.json
//to use it, remove "type" : "module" from package.json
