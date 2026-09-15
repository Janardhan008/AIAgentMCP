const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

let input = [];
rl.on('line', (line) => input.push(line.trim()));

rl.on('close', () => {
  // Read all tokens from input (handles values split across lines or spaces)
  const tokens = input.join(' ').split(/\s+/).filter(Boolean).map(Number);

  let idx = 0;
  const R = tokens[idx++];
  const C = tokens[idx++];

  // Build the R x C matrix
  const matrix = [];
  for (let i = 0; i < R; i++) {
    const row = [];
    for (let j = 0; j < C; j++) {
      row.push(tokens[idx++]);
    }
    matrix.push(row);
  }

  // Build the transpose: C x R
  const transpose = [];
  for (let j = 0; j < C; j++) {
    const row = [];
    for (let i = 0; i < R; i++) {
      row.push(matrix[i][j]);
    }
    transpose.push(row);
  }

  // Print result
  const output = transpose.map(row => row.join(' ')).join('\n');
  console.log(output);
});