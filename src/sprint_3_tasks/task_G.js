const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function sortColors(arr) {
  const pink = [];
  const yellow = [];
  const crimson = [];
  for (let i = 0; i < arr.length; i++) {
    const color = arr[i];
    switch (color) {
      case "0":
        pink.push(color);
        break;
      case "1":
        yellow.push(color);
        break;
      case "2":
        crimson.push(color);
      default:
        break;
    }
  }
  console.log(pink.concat(yellow, crimson).join(" "));
}

function solve() {
  const colors = _inputLines[1].split(" ");
  sortColors(colors);
}
