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
    this.items = [];
    this.max_items = [];
  }

  push(item) {
    this.items.push(item);
    const maxLength = this.getMaxLength();
    const max_item = this.max_items[maxLength - 1];
    if (!maxLength || item >= max_item) {
      this.max_items.push(item);
    } 
  }

  pop() {
    if (this.items.length) {
      if (this.items[this.items.length - 1] === this.get_max()) {
        this.max_items.pop();
      }
      this.items.pop();
    } else {
      return "error";
    }
  }

  get_max() {
    const maxLength = this.getMaxLength();
    if (maxLength) {
      return this.max_items[maxLength - 1];
    }
    return "None";
  }

  getMaxLength() {
    return this.max_items.length;
  }
}

function toArray(str) {
  return str.split(" ");
}

function getResults(arr, count) {
  let result = "";
  const stackList = new Stack();
  for (let i = 0; i < count; i++) {
    const temp = arr[i];
    if (temp.length === 1) {
      const calc = stackList[temp]();
      if (calc != undefined) {
        result += `${stackList[temp]()}\n`;
      }
    } else {
      stackList[temp[0]](Number(temp[1]));
    }
  }
  return result;
}

function solve() {
  const countCommands = Number(_inputLines[0]);
  const commads = [];
  for (let i = 1; i <= countCommands; i++) {
    commads.push(toArray(_inputLines[i]));
  }
  const result = getResults(commads, countCommands);
  console.log(result);
}
