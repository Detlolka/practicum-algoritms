const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function fibonachi_module(number, k) {
  let fib_0 = 1;
  let fib_1 = 1;
  const mod = 10 ** k;
  if (number <= 1) {
    return 1;
  }
  for (let i = 1; i < number; i++) {
    const temp = fib_1;
    fib_1 = (fib_0 + fib_1) % mod;
    fib_0 = temp;
  }
  return fib_1;
}

function solve() {
  const numbers = _inputLines[0].split(" ").map((el) => Number(el));
  const fibonachi_num = numbers[0];
  const k = numbers[1];
  const result = fibonachi_module(fibonachi_num, k);
  console.log(result);
}
