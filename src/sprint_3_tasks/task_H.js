const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function compareTwoNumbers(num1, num2) {
  if (num1.length === num2.length) {
    return num1 > num2;
  } else {
    const sum1 = num1 + num2;
    const sum2 = num2 + num1;
    return sum1 > sum2;
  }
}

function findBiggestNumber(array) {
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    while (i > 0 && compareTwoNumbers(currentNumber, array[i - 1])) {
      array[i] = array[i - 1];
      i -= 1;
    }
    array[i] = currentNumber;
  }
  return array;
}

function solve() {
  const numbers = _inputLines[1].split(" ");
  const result = findBiggestNumber(numbers);
  console.log(result.join(""));
}
