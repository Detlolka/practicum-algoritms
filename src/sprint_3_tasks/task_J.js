const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function bubbleSort(array) {
    let called = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let isImmutable = false;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const swap = array[j + 1];
                array[j + 1] = array[j];
                array[j] = swap
                isImmutable = true;
            }
        }
        if (isImmutable) {
            console.log(array.join(" "));
            called += 1;
        }
    }
    if (!called) {
        console.log(array.join(" "));
    }
}

function solve() {
    const n = Number(_inputLines[0]);
    const arr = _inputLines[1].split(" ").map((el) => Number(el));
    bubbleSort(arr);
} 