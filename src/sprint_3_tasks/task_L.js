const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function binarySearch(arr, cost, left, right) {
  if (right <= left && left != 0) {
    return -1;
  }

  let middle = Math.floor((left + right) / 2);

  if(arr[middle] >= cost && (arr[middle - 1] < cost || middle === 0)) {
    return middle + 1;
  } else if (cost <= arr[middle]) {
    return binarySearch(arr, cost, left, middle);
  } else {
    return binarySearch(arr,cost, middle + 1, right);
  }

}

function solve() {
  const days = Number(_inputLines[0]);
  const deposits = _inputLines[1].split(" ").map((el) => Number(el));
  const bikeCost = Number(_inputLines[2]);
  const left = 0
  const right = deposits.length;
  const one = binarySearch(deposits, bikeCost, left, right);
  const two = binarySearch(deposits, bikeCost * 2, left, right);
  console.log(`${one} ${two}`);
}
