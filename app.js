// const isEven = require("./modules/isEven");

// console.log("Is 10 even?", isEven(10));
// console.log("Is 7 even?", isEven(7));
const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Program started");

console.log("Is 10 even?", isEven(10));
console.log("Is 7 even?", isEven(7));

log("Program completed");