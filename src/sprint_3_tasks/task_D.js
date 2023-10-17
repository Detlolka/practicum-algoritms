const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function calcCookiesCount(child, cookies) {
    let count = 0;
    let j = 0;
    for (let i = 0; i < child.length; i++) {
        while (j < cookies.length) {
            if (cookies[j] >= child[i]) {
                count += 1;
                j += 1;
                break;
            }
            j += 1;
        }
    }
    console.log(count);
}

function toArraySort(str) {
    return str.split(" ").map((el) => Number(el)).sort((a, b) => a - b);
}

function solve() {
    const child = toArraySort(_inputLines[1]);
    const cookies = toArraySort(_inputLines[3]);
    calcCookiesCount(child, cookies);
} 