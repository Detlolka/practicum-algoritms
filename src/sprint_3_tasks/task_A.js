const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function getBinary(n, open, close, prefix) {
  if (open + close === 2 * n) {
    console.log(prefix)
     return prefix;
  }
  if (open < n) {
    getBinary(n, open + 1, close, prefix + '(')
  }

  if (open > close) {
    getBinary(n, open, close + 1, prefix + ')');
  }
}

function solve() {
  const n = Number(_inputLines[0]);
  const result = getBinary(n, 0, 0, "");
}
