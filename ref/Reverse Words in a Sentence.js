const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on("line", (line) => {
  const words = line.trim().split(/\s+/);
  console.log(words.reverse().join(" "));
  rl.close();
});