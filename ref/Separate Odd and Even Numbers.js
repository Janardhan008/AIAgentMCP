const fs = require("fs");

const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// first number is the count n, rest are the array
const arr = tokens.slice(1);

const evens = [];
const odds = [];

for (const num of arr) {
    if (num % 2 === 0) {
        evens.push(num);
    } else {
        odds.push(num);
    }
}

console.log(`Even Numbers: ${evens.join(" ")} 
Odd Numbers: ${odds.join(" ")}`);