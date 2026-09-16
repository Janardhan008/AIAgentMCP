const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

let input = [];
rl.on('line', (line) => input.push(line.trim()));

rl.on('close', () => {
  // Read all tokens from input (handles values split across lines or spaces)
  const tokens = input.join(' ').split(/\s+/).filter(Boolean).map(Number);

  const K = tokens[0];
  const nums = tokens.slice(1);

  if (K > nums.length) {
    console.log('INVALID');
    return;
  }

  // Sort descending, duplicates count as separate elements
  const sorted = [...nums].sort((a, b) => b - a);

  console.log(sorted[K - 1]);
});