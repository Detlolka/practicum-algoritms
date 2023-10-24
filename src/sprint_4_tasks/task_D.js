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
    const n = Number(_inputLines[0]);
    const hashMap = {
    }

    for (let i = 1; i < n + 1; i++) {
        const item = _inputLines[i];
        if (hashMap[item]) {
            hashMap[item] += 1;
        } else {
            hashMap[item] = 1;
        }
    }
    console.log(Object.keys(hashMap).join("\n"));
} 