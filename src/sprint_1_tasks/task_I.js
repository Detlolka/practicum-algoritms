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
    let number = Number(_inputLines[0]);
    const divider = 4;
    while(number >= divider) {
        if (number % divider === 0) {
            number = number / divider;
        } else {
            break;
        }
    }
    const result = number === 1 ? "True" : "False";
    console.log(result);
} 