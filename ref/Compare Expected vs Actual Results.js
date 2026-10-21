const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const lines = [];
rl.on("line", (line) => lines.push(line));

rl.on("close", () => {
  const parse = (s = "") =>
    s.split(",").map((x) => x.trim()).filter((x) => x !== "");

  const expected = parse(lines[0]);
  const actual = parse(lines[1]);

  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);

  const missing = expected.filter((x) => !actualSet.has(x));
  const unexpected = actual.filter((x) => !expectedSet.has(x));

  console.log("Missing: " + (missing.length ? missing.join(",") : "None"));
  console.log("Unexpected: " + (unexpected.length ? unexpected.join(",") : "None"));
});