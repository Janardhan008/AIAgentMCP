const data = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);

const n = parseInt(data[0], 10);
const entries = data.slice(1);

const failCounts = new Map();

for (const entry of entries) {
  const parts = entry.split('|');
  if (parts.length < 3) continue;
  const module = parts[0];
  const status = parts[2];
  if (status === 'FAIL') {
    failCounts.set(module, (failCounts.get(module) || 0) + 1);
  }
}

const sorted = [...failCounts.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, n);

if (sorted.length === 0) {
  console.log('NONE');
} else {
  for (const [module, count] of sorted) {
    console.log(`${module} ${count}`);
  }
}