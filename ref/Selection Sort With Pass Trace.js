const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let arr = input;

const n = arr.length;
let output = [];

for (let i = 0; i < n - 1; i++) {

    // Assume current position has the minimum
    let minIndex = i;

    // Find minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // Swap minimum element with arr[i]
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    // Print: index + array after swap
    output.push(minIndex + " " + arr.join(" "));
}

console.log(output.join("\n"));