const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
  const str = _inputLines[0];
  let i = 0;
  let maxLength = 0;
  const hashSet = new Set();
  while (i < str.length) {
    if (!hashSet.has(str[i])) {
        hashSet.add(str[i]);
    } else {
       for (let value of hashSet) {
        if (value === str[i]) {
            hashSet.delete(value);
            hashSet.add(str[i]);
            break;
        }
        hashSet.delete(value);
       }
    }
    if (maxLength < hashSet.size) {
        maxLength = hashSet.size;
    }
    i += 1;
  }
  console.log(maxLength);
}
