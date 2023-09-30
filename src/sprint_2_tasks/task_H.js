const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

class Stack {
  constructor() {
    this.clothes_brackets = [];
  }

  push(bracket) {
    switch (bracket) {
      case "(":
        this.clothes_brackets.push(")");
        break;
      case "{":
        this.clothes_brackets.push("}");
        break;
      case "[":
        this.clothes_brackets.push("]");
        break;
      default:
        this.clothes_brackets.push(null);
    }
  }

  pop(bracket) {
    const brackets = this.clothes_brackets;
    if (bracket === brackets[brackets.length - 1]) {
      brackets.pop();
      return true;
    } else {
      return false;
    }
  }

  get_length() {
    return this.clothes_brackets.length;
  }
}

function toArray(str) {
  return str.split("");
}

function is_correct_bracket_seq(brackets) {
  const stackList = new Stack();
  if (!brackets.length) {
    return "True";
  }
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(" || brackets[i] === "{" || brackets[i] === "[") {
      stackList.push(brackets[i]);
    } else {
      const pop = stackList.pop(brackets[i]);
      if (!pop) {
        return "False";
      }
    }
    if (i === brackets.length - 1 && stackList.get_length() !== 0) {
        return "False";
    }
  }
  return "True";
}

function solve() {
  const brackets_line = toArray(_inputLines[0]);

  const result = is_correct_bracket_seq(brackets_line);
  console.log(result);
}
