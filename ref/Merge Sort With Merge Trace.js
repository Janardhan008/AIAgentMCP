const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const arr = input === "" ? [] : input.split(/\s+/).map(Number);

const output = [];

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

function mergeSort(a) {
  if (a.length <= 1) return a;

  // left half takes the extra element when the size is odd
  const mid = Math.ceil(a.length / 2);

  const left = mergeSort(a.slice(0, mid));
  const right = mergeSort(a.slice(mid));

  const merged = merge(left, right);

  // printed after the merge finishes, so the deepest merges come first
  output.push(`${left.join(" ")} + ${right.join(" ")} -> ${merged.join(" ")}`);

  return merged;
}

mergeSort(arr);
console.log(output.join("\n"));