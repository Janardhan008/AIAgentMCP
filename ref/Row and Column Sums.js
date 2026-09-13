const data = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/).map(Number);

let idx = 0;
const rows = data[idx++];
const cols = data[idx++];

const matrix = [];
for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
        row.push(data[idx++]);
    }
    matrix.push(row);
}

const rowSums = matrix.map(row => row.reduce((a, b) => a + b, 0));

const colSums = new Array(cols).fill(0);
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        colSums[c] += matrix[r][c];
    }
}

console.log(rowSums.join(' '));
console.log(colSums.join(' '));