const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function getResult(str1, str2, n) {
  let i = 0;
  const mapOne = new Map();
  const mapTwo = new Map();
  while (i < n) {
    const letter1 = str1[i];
    const letter2 = str2[i];
    if (!mapOne.has(letter1) && !mapTwo.has(letter2)) {
      mapOne.set(letter1, letter2);
      mapTwo.set(letter2, letter1);
    } else if (mapOne.get(letter1) !== letter2) {
      return "NO";
    }
    i += 1;
  }
  return "YES";
}

function solve() {
  const str1 = _inputLines[0];
  const str2 = _inputLines[1];
  const n = str1.length;

  if (n != str2.length) {
    console.log("NO");
    return;
  }
  const result = getResult(str1, str2, n);
  console.log(result);
}
