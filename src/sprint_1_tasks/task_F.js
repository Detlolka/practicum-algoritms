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
    const str = _inputLines[0].toLowerCase();
    const reg = /[^\w]/g;
    const pallindrom = str.replace(/_/g, "").replace(reg, "").split("");
    let result = "True";
    for (let i = 0; i < pallindrom.length / 2; i ++) {
        if (pallindrom[i] !== pallindrom[pallindrom.length - 1 - i]) {
            result = "False";
            break;
        }
    }
    console.log(result);
} 