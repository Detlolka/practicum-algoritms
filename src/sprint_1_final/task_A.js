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
  return str.split(" ").map((num) => Number(num));
}

function findRightZeroIndex(arr, current) {
  for (let i = current; i < arr.length; i++) {
    if (arr[i] === 0) {
      return i;
    }
  }
}

function getNearestZero(arr, n) {
  let leftZeroIndex = 0;
  let rightZeroIndex = findRightZeroIndex(arr, 0);
  const distanceList = [];

  for (let i = 0; i < n; i++) {
    if (i === rightZeroIndex) {
      leftZeroIndex = rightZeroIndex;
      rightZeroIndex = findRightZeroIndex(arr, i + 1) ?? leftZeroIndex;
      distanceList.push(0);
      continue;
    }

    if (leftZeroIndex === rightZeroIndex) {
      distanceList.push(i - leftZeroIndex);
      continue;
    }
    
    const distanceLeft = rightZeroIndex - i;
    const distanceRight = i - leftZeroIndex;

    if (distanceRight < distanceLeft) {
      distanceList.push(distanceRight);
    } else {
      distanceList.push(distanceLeft);
    }
  }
  return distanceList;
}

function solve() {
  const n = Number(_inputLines[0]);
  const housesNums = toArray(_inputLines[1]);
  const result = getNearestZero(housesNums, n);
  console.log(result.join(" "));
}
