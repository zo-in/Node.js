// console.log("one");

// setTimeout(() => {
//   console.log("first");
// }, 2001);

// setTimeout(() => {
//   console.log("second");
// }, 2000);

// console.log("third");

const os = require("os");
// method returns the system uptime in seconds
setInterval(() => {
  console.log(`The system uptime is ${os.uptime()} seconds`);
}, 1000);
