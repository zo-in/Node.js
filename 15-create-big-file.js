const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/vbig.txt", `hello world ${i}\n`, { flag: "a" });
}
