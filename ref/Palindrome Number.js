const fs = require("fs");

const n = parseInt(fs.readFileSync(0, "utf8").trim(), 10);

function isPalindrome(x) {
  // negative numbers can never be palindromes (the '-' sign breaks symmetry)
  if (x < 0) return false;

  const original = x;
  let reversed = 0;

  while (x > 0) {
    const lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

console.log(isPalindrome(n));