const lines = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const output = lines.map(line => {
  const parts = line.trim().split(/\s+/).map(Number);
  const [min, max] = parts;

  if (min > max) {
    return 'INVALID';
  }

  const boundaries = [
    min - 1,
    min,
    min + 1,
    max - 1,
    max,
    max + 1
  ];

  return boundaries.join(' ');
});

console.log(output.join('\n'));