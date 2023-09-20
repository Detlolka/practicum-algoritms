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
    const splitted = _inputLines[0].split(" ").map(num => Number(num));
    const a = splitted[0];
    const x = splitted[1];
    const b = splitted[2];
    const c = splitted[3];

    const answer = a * x * x + b * x + c;

    console.log(answer);
} 