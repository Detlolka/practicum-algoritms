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
  return str.split(" ").map((el) => Number(el));
}


function buyingHouse(prices, sum) {
  let i = 0;
  while (sum >= prices[i]) {
    sum -= prices[i];
    i++;
  }
  console.log(i);
}

function solve() {
  const [_, sum] = toArray(_inputLines[0]);
  const prices = toArray(_inputLines[1]);
  const sortPrices = prices.sort((a, b) => a - b);
  buyingHouse(sortPrices, sum);
}
