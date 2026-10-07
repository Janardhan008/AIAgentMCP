const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let s = line.trim();
    if (s) {
        let result = s.replace(/^0+(?!$)/, '');
        console.log(result);
    }
});