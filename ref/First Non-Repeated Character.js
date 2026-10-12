const fs = require('fs');

const str = fs.readFileSync(0, 'utf8').trim();

// Step 1: count how many times each character appears
const count = {};
for (const ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}

// Step 2: find the first character with count 1
let result = 'None';
for (const ch of str) {
  if (count[ch] === 1) {
    result = ch;
    break;
  }
}

console.log(result);