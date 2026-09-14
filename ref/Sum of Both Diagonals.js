const data = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/).map(Number);
// Reads all input from stdin, trims whitespace, splits on any whitespace/newlines,
// and converts every token into a number. This gives us a flat array of all values.

let idx = 0;
// A pointer to track which value we're currently reading from the flat array.

const n = data[idx++];
// The first number is the size of the square matrix (n x n). idx++ reads it
// then moves the pointer to the next value.

const matrix = [];
// Will hold the 2D matrix once built.

for (let r = 0; r < n; r++) {
    // Loop over each row, 0 to n-1.

    const row = [];
    // Temporary array to hold this row's values.

    for (let c = 0; c < n; c++) {
        // Loop over each column in the current row.

        row.push(data[idx++]);
        // Take the next value from the flat array and add it to the row,
        // then advance the pointer.
    }

    matrix.push(row);
    // Add the completed row to the matrix.
}

let sum = 0;
// Will accumulate the total of both diagonals.

for (let i = 0; i < n; i++) {
    // Loop over each index from 0 to n-1, used for both diagonals.

    sum += matrix[i][i];
    // Main diagonal: row i, column i (top-left to bottom-right).

    sum += matrix[i][n - 1 - i];
    // Anti-diagonal: row i, column (n-1-i) (top-right to bottom-left).
}

if (n % 2 === 1) {
    // If the matrix has an odd size, the two diagonals share the centre cell,
    // which we've just added twice above.

    sum -= matrix[Math.floor(n / 2)][Math.floor(n / 2)];
    // Subtract one copy of the centre element to correct the double-count.
}

console.log(sum);
// Print the final corrected sum.