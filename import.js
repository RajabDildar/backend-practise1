import { sum, PI } from "./math2.js";
import { generate } from "random-words";

console.log(generate());
console.log(generate(5));
console.log(sum(1, 2));
console.log(PI);
//to use import, we have to use "type" : "module" in package.json
