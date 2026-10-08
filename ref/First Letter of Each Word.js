const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line) => {
  const words = line.trim().split(/\s+/).filter(Boolean);
  console.log(words.map((w) => w[0]).join(''));
  rl.close();
});