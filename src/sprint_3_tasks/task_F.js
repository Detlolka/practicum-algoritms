const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function getMaxPerimeter(sides) {
    for (let i = 0; i < sides.length; i++) {
        const maxSides = sides[i]
        for (let j = i + 1; j < sides.length; j++) {
            if (maxSides < sides[j] + sides[j + 1]) {
                return maxSides + sides[j] + sides[j + 1];
            }
        }
    }
}

function solve() {
 const sides = _inputLines[1].split(" ").map(Number).sort((a, b) => b - a);
 const result = getMaxPerimeter(sides);
 console.log(result);
} 