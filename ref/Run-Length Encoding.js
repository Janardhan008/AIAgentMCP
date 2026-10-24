const lines = require("fs").readFileSync(0, "utf8").split("\n");
const s = (lines[0] || "").trim();

let result = "";
let count = 1;

for (let i = 1; i <= s.length; i++) {
  if (i < s.length && s[i] === s[i - 1]) {
    count++;
  } else {
    result += s[i - 1] + count;
    count = 1;
  }
}

console.log(result);