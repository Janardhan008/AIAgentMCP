const fs = require('fs');

const n = parseInt(fs.readFileSync(0, 'utf8').trim());

const result = [];
let a = 0, b = 1;

for (let i = 0; i < n; i++) {
  result.push(a);
  [a, b] = [b, a + b];
}

console.log(result.join(' '));