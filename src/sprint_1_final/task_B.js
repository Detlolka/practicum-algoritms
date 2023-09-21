// Ловкость рук
// https://contest.yandex.ru/contest/22450/run-report/90982407/

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
  return str.split("").map((num) => {
    const number = Number(num);
    return isNaN(number) ? 0 : number;
  });
}

function getScores(taps, keys) {
  const rounds = 9;
  let scores = 0;
  for (let i = 1; i <= rounds; i++) {
    let count = 0;
    for (let j = 0; j < keys.length; j++) {
      if (i === keys[j]) {
        count += 1;
      }
    }
    if (count != 0 && taps >= count) {
      scores += 1;
    }
  }
  return scores;
}

function solve() {
  const n = Number(_inputLines[0]) * 2;
  const keysLines = 5;
  let keys = "";
  for (let i = 1; i < keysLines; i++) {
    keys += _inputLines[i];
  }
  const keysList = toArray(keys);
  const scores = getScores(n, keysList);
  console.log(scores);
}
