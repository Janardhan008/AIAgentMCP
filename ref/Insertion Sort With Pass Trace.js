const fs = require("fs");

const arr = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const output = [];

for (let i = 1; i < arr.length; i++) {
  const key = arr[i];
  let j = i - 1;

  // shift elements greater than key one place right
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;

  // print the whole list after this insertion
  output.push(arr.join(" "));
}

console.log(output.join("\n"));