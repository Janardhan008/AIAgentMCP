const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

let input = [];
rl.on('line', (line) => input.push(line.trim()));

rl.on('close', () => {
  const target = parseInt(input[0], 10);
  const nums = input[1].split(/\s+/).filter(Boolean).map(Number);

  const first = findFirst(nums, target);
  const last = findLast(nums, target);

  console.log(`${first} ${last}`);
});

function findFirst(nums, target) {
  let low = 0, high = nums.length - 1, result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      result = mid;
      high = mid - 1; // keep searching left half for earlier occurrence
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

function findLast(nums, target) {
  let low = 0, high = nums.length - 1, result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      result = mid;
      low = mid + 1; // keep searching right half for later occurrence
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}