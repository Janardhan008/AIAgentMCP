const fs = require("fs");

const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = tokens[0];
const nums = tokens.slice(1, 1 + n);
const target = tokens[tokens.length - 1];

const seen = new Map(); // value -> index

let result = [];
for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (seen.has(complement)) {
    result = [seen.get(complement), i];
    break;
  }
  seen.set(nums[i], i);
}

console.log(result.join(" "));