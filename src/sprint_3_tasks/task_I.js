const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function getMaxIds(ids) {
    const table = {};
    for (let i = 0; i < ids.length; i ++) {
        const id = ids[i];
        if (table[id]) {
            table[id] += 1;
        } else {
            table[id] = 1;
        }
    }
    return Object.entries(table).sort((a, b) => b[1]- a[1]).map((el) => el[0]);
}

function solve() {
    const ids = _inputLines[1].split(" ").map(Number);
    const countUnivers = Number(_inputLines[2]);
    const result = getMaxIds(ids);
    console.log(result.slice(0, countUnivers).join(" "));
} 