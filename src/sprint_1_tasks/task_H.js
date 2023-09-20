const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function toArray(str) {
  return str
    .toString()
    .split("")
    .map((num) => Number(num));
}

function toModifyArray(biggestLenght, arr) {
  const different = biggestLenght - arr.length;
  if (arr.length != biggestLenght) {
    const equalizationArray = Array.from({ length: different }, () => 0);
    return [...equalizationArray, ...arr];
  }
  return arr;
}

function solve() {
  let a = toArray(_inputLines[0]);
  let b = toArray(_inputLines[1]);
  const biggest_length = a.length > b.length ? a.length : b.length;

  a = toModifyArray(biggest_length, a);
  b = toModifyArray(biggest_length, b);

  const result = [];
  for (let i = biggest_length - 1; i >= 0; i--) {
    let sum = a[i] + b[i];
    if (sum === 2 && i === 0) {
      result.unshift(1, 0);
    } else if (sum === 3 && i === 0) {
      result.unshift(1, 1);
    } else if (sum === 2) {
      a[i - 1] += 1;
      result.unshift(0);
    } else if (sum === 3) {
      a[i - 1] += 1;
      result.unshift(1);
    } else {
      result.unshift(sum);
    }
  }

  console.log(result.join(""));
}
