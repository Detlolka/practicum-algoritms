const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function get_weather_count(arr, n) {
  let count = 0;

  if (n === 1) {
    count += 1;
    return count;
  }
  if (arr[0] > arr[1]) {
    count += 1;
  }

  if (arr[n -1] > arr[n - 2]) {
    count += 1;
  }

  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      count += 1;
    }
  }
  return count;
}

function solve() {
  const n = Number(_inputLines[0]);
  const temperatures = _inputLines[1].split(" ").map((num) => Number(num));
  const result = get_weather_count(temperatures, n);
  console.log(result);
}
