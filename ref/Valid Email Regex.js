const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (email) => {
    email = email.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const result = emailRegex.test(email) ? "Valid" : "Invalid";

    console.log(result);
    rl.close();
});