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
  return str.split(" ");
}

function transformMatrix(column, row, arr) {
    let result = "";
    for (let i = 0; i < row; i++) {
        let rowTransform = ""
        for (j = 0; j < column; j++) {
            rowTransform += `${arr[j][i]} `;
        }
        result += `${rowTransform}\n`;
    }
    return result;
}

function solve() {
  const col = Number(_inputLines[0]);
  const row = Number(_inputLines[1]);
  let i = 2;
  const matrix = [];
  while (_inputLines[i]) {
    matrix.push(toArray(_inputLines[i]));
    i += 1;
  }
  const result = transformMatrix(col, row, matrix);
  console.log(result);
}
