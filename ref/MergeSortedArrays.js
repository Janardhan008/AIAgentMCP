const lines = require("fs").readFileSync(0, "utf8").split("\n");

const parse = (line) =>
  (line || "").trim().split(/\s+/).filter((x) => x !== "").map(Number);

const a = parse(lines[0]);
const b = parse(lines[1]);

const result = [];
let i = 0;
let j = 0;

while (i < a.length && j < b.length) {
  if (a[i] <= b[j]) {
    result.push(a[i++]);
  } else {
    result.push(b[j++]);
  }
}

while (i < a.length) result.push(a[i++]);
while (j < b.length) result.push(b[j++]);

console.log(result.join(" "));