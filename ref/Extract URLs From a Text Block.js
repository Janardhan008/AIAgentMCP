function extractUrls(text) {
  const trailingChars = new Set(['.', ',', ';', ')']);
  const seen = new Set();
  const result = [];

  // Match http(s):// followed by any non-whitespace characters,
  // regardless of what precedes it in the token.
  const matches = text.match(/https?:\/\/\S+/g) || [];

  for (let url of matches) {
    while (url.length > 0 && trailingChars.has(url[url.length - 1])) {
      url = url.slice(0, -1);
    }

    if (url.length > 0 && !seen.has(url)) {
      seen.add(url);
      result.push(url);
    }
  }

  return result.length > 0 ? result.join('\n') : 'NONE';
}

const text = require('fs').readFileSync(0, 'utf8');
console.log(extractUrls(text));