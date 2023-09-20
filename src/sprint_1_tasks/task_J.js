const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function is_prime(number, mulitiplicator) {
    let i = mulitiplicator;
    while (i * i <= number) {
        if (number % i === 0) {
            return false;
        }
        i++;
    }
    return true;
} 

function solve() {
    let number =  Number(_inputLines[0]);
    const multiplyList = [];
    let mulitiplicator = 2;

    while (mulitiplicator <= number) {
        if (number % mulitiplicator === 0) {
            multiplyList.push(mulitiplicator);
            number /= mulitiplicator;
        } else if (is_prime(number, mulitiplicator)) {
            multiplyList.push(number);
            break;
        } else {
            mulitiplicator += 1;
        }
    }
    console.log(multiplyList.join(" "));
} 