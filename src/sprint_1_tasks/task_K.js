const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function toNumber(str) {
    return str.map(num => Number(num));
}

function toModifyArray(biggestLenght, arr) {
    const different = biggestLenght - arr.length;
    if (arr.length != biggestLenght) {
        const equalizationArray = Array.from({length: different}, () => 0);
        return [...equalizationArray, ...arr];
    }
    return arr;
}

function solve() {
    let x = toNumber(_inputLines[1].split(" "));
    let k = toNumber(_inputLines[2].toString().split(""));
    const biggest_length = x.length > k.length ? x.length : k.length;

    x = toModifyArray(biggest_length, x);
    k = toModifyArray(biggest_length, k);


    const result = [];
    for (let i = biggest_length - 1; i >= 0; i--) {
        let sum = k[i] + x[i];

        if (sum >= 10 && i <= 0) {
            sum -= 10;
            result.unshift(sum);
            result.unshift(1);
        } else  if (sum >= 10) {
            x[i - 1] += 1;
            sum -= 10;
            result.unshift(sum);
        } else {
            result.unshift(sum);
        }
    }
      
    
    console.log(result.join(" "));
} 