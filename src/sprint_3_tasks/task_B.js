const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

const phone = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function getCombineNumbers(buttons, combine, result) {
  if (buttons === "") {
    result.push(combine);
    return;
  }

  for (item of phone[buttons[0]]) {
    combine += item;
    getCombineNumbers(buttons.slice(1), combine, result)
    combine = combine.substring(combine, combine.length - 1);
  }
}

function solve() {
  const buttons = _inputLines[0];
  const result = [];
  getCombineNumbers(buttons, "", result);
  console.log(result.join(" "));
}
