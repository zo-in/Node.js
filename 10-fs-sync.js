const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// const fs = require('fs');
// fs.read
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the tast");
console.log("starting the next one");
