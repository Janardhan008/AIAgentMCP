const fs = require("fs");

const str = fs.readFileSync(0, "utf8").trim();

function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      const top = stack.pop();
      if (top !== pairs[ch]) {
        return false;
      }
    }
  }

  // valid only if every opening bracket was matched and closed
  return stack.length === 0;
}

console.log(isValid(str));