const fs = require("fs");

const tokens = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const employees = [];
for (let i = 0; i < tokens.length; i += 2) {
  employees.push({ name: tokens[i], salary: Number(tokens[i + 1]) });
}

employees.sort((a, b) => {
  if (b.salary !== a.salary) {
    return b.salary - a.salary;
  }
  return a.name.localeCompare(b.name);
});

const output = employees.map(e => `${e.name} ${e.salary}`).join("\n");
console.log(output);