const lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

// Split into two blocks by a blank line (previous run, then current run)
let idx = lines.findIndex(l => l.trim() === '');
if (idx === -1) idx = lines.length; // no blank line found, fallback

const prevLines = lines.slice(0, idx).map(l => l.trim()).filter(Boolean);
const currLines = lines.slice(idx + 1).map(l => l.trim()).filter(Boolean);

function parseBlock(blockLines) {
  const map = new Map();
  for (const line of blockLines) {
    const [id, status] = line.split('|').map(s => s.trim());
    if (id) map.set(id, status);
  }
  return map;
}

const prev = parseBlock(prevLines);
const curr = parseBlock(currLines);

const regressed = [];
const fixed = [];
const added = [];
const removed = [];

for (const [id, status] of prev) {
  if (curr.has(id)) {
    const newStatus = curr.get(id);
    if (status === 'PASS' && newStatus === 'FAIL') regressed.push(id);
    else if (status === 'FAIL' && newStatus === 'PASS') fixed.push(id);
  } else {
    removed.push(id);
  }
}

for (const id of curr.keys()) {
  if (!prev.has(id)) added.push(id);
}

regressed.sort();
fixed.sort();
added.sort();
removed.sort();

function printSection(title, arr) {
  console.log(title);
  if (arr.length === 0) {
    console.log('NONE');
  } else {
    for (const id of arr) console.log(id);
  }
}

printSection('REGRESSED', regressed);
printSection('FIXED', fixed);
printSection('NEW', added);
printSection('REMOVED', removed);