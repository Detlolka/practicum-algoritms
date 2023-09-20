const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const numbers = _inputLines[0].split(" ").map(num => Number(num));
    let odd = 0;
    let even = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    const result = odd === 3 || even === 3 ? "WIN" : "FAIL";
    console.log(result);
} 