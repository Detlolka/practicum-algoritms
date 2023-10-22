const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function toArray(str) {
    return str.split(" ").map(Number);
}

function solve() {
    const arrOne = toArray(_inputLines[2]);
    const arrTwo = toArray(_inputLines[3]);            
    const unitedArr = arrOne.concat(arrTwo).sort((a, b) => a - b);
    const median = unitedArr.length / 2;
    if (unitedArr.length % 2 !== 0) {
        console.log(unitedArr[Math.floor(median)]);
    } else {
        console.log((unitedArr[median - 1] + unitedArr[median]) / 2);
    }
}
