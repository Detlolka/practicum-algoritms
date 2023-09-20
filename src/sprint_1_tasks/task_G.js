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
    let number = Number(_inputLines[0]);
    let binary_number = [];
    if (number <= 0) {
        return;
    }
    while(number > 0) {
        const calculateBinary = number % 2;
        if (calculateBinary !== 0) {
            number -= calculateBinary; 
        }
        number /= 2;   
        binary_number.unshift(calculateBinary);
    }
    console.log(binary_number.join(""));    
} 