const data = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);

function evaluatePostfix(tokens) {
    const stack = [];
    for (const tok of tokens) {
        if (tok === '+' || tok === '-' || tok === '*' || tok === '/') {
            const b = stack.pop();
            const a = stack.pop();
            let res;
            if (tok === '+') res = a + b;
            else if (tok === '-') res = a - b;
            else if (tok === '*') res = a * b;
            else {
                // integer division truncating toward zero
                res = Math.trunc(a / b);
            }
            stack.push(res);
        } else {
            stack.push(parseInt(tok, 10));
        }
    }
    return stack[stack.length - 1];
}

console.log(evaluatePostfix(data));