const input = require("fs").readFileSync(0, "utf8").trim();
const n = parseInt(input, 10);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(String(factorial(n)));