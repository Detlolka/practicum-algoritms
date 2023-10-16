const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function findSequence(sequence, str) {
    let count = sequence.length;
    let index = 0;
    for (let i = 0; i < sequence.length; i++) {
        for (let j = index; j < str.length; j++) {
            if (sequence[i] === str[j]) {
                count -= 1;
                index = j + 1;
                break;
            }
        }
    }

    return count === 0 ? "True" : "False";
}

function solve() {
const sequence = _inputLines[0].split("");
const str = _inputLines[1].split("");
const result = findSequence(sequence, str);
console.log(result);
} 