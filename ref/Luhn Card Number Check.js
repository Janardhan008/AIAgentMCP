const lines = require('fs').readFileSync(0, 'utf8').split('\n').filter(line => line.trim().length > 0);

function checkLuhn(rawLine) {
  // Any character that isn't a digit, space, or hyphen makes it invalid
  if (/[^0-9 \-]/.test(rawLine)) {
    return 'INVALID';
  }

  // Strip spaces and hyphens, keep only digits
  const digits = rawLine.replace(/[ \-]/g, '');

  if (digits.length === 0) {
    return 'INVALID';
  }

  let sum = 0;
  let shouldDouble = false;

  // Walk from rightmost digit leftwards
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0 ? 'VALID' : 'INVALID';
}

const output = lines.map(line => checkLuhn(line.trim()));
console.log(output.join('\n'));