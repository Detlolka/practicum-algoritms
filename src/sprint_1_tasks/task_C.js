const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function toNumberArray(arr) {
  return arr.map((el) => Number(el));
}

function toSortResult(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestNumber = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestNumber]) {
                smallestNumber = j;
            }
        }
        if (smallestNumber != i) {
            const swap = arr[i];
            arr[i] = arr[smallestNumber];
            arr[smallestNumber] = swap;
        }
    }
    return arr.join(' ');
}

function solve() {
  const stringsCount = Number(_inputLines[0]);
  const columnCount = Number(_inputLines[1]);
  const matrix = _inputLines
    .slice(2, stringsCount + 2)
    .map((el) => toNumberArray(el.split(" ")));
  const stringCord = Number(_inputLines[stringsCount + 2]);
  const columnCord = Number(_inputLines[stringsCount + 3]);
  const result = [];

  const left = matrix[stringCord]?.[columnCord + 1];
  const right = matrix[stringCord]?.[columnCord - 1];
  const up = matrix[stringCord - 1]?.[columnCord];
  const down = matrix[stringCord + 1]?.[columnCord];

  if (left !== undefined) {
    result.push(left);
  }

  if (right !== undefined) {
    result.push(right);
  }

  if (up !== undefined) {
    result.push(up);
  }

  if (down !== undefined) {
    result.push(down);
  }

  console.log(toSortResult(result));
}
