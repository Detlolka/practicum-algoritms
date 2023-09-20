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
    const currentWord = _inputLines[0].split("");
    let wordWithExcessLetter = _inputLines[1].toString();
    for (let i = 0; i < currentWord.length; i++) {
        wordWithExcessLetter = wordWithExcessLetter.replace(currentWord[i], "");
    }
    console.log(wordWithExcessLetter);    
} 