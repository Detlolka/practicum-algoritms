const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function calcCookiesCount(arrOne, arrTwo) {
    let count = 0;
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrTwo[j] !== null && Number(arrOne[i]) >= Number(arrTwo[j])) {
                count += 1;
                arrTwo[j] = null;
                break;
            }
        }
    }
    console.log(count);
}

function solve() {
    const childCount = Number(_inputLines[0]);
    const childFactor = _inputLines[1].split(" ");
    const cookiesCount = Number(_inputLines[2]);
    const cookies = _inputLines[3].split(" ");
    childCount > cookiesCount ? calcCookiesCount(cookies, childFactor) : calcCookiesCount(childFactor, cookies);
} 