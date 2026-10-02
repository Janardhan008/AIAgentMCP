const fs = require("fs");

const n = parseInt(fs.readFileSync(0, "utf8").trim(), 10);

function reverseInteger(num) {
  const sign = num < 0 ? -1 : 1;
  const digits = Math.abs(num).toString().split("").reverse().join("");
  const reversed = sign * parseInt(digits, 10);

  // 32-bit signed integer range check
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }
  return reversed;
}

console.log(reverseInteger(n));