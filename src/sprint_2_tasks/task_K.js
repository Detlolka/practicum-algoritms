const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function recourse_fibonachi(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return recourse_fibonachi(number - 1) + recourse_fibonachi(number - 2);
}

function solve() {
    const num = Number(_inputLines[0]);
    const result = recourse_fibonachi(num);
    console.log(result);
} 