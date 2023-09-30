const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

class MyQueueSized {
  constructor(maxSize) {
    this.items = [];
    this.maxSize = maxSize;
  }

  push(item) {
    if (this.items.length === this.maxSize) {
      return "error";
    } else {
      this.items.push(item);
    }
  }

  pop() {
    const length = this.items.length;
    if (length) {
      return this.items.shift();
    } else {
      return "None";
    }
  }

  peek() {
    if (this.items.length) {
      return this.items[0];
    } else {
      return "None";
    }
  }

  size() {
    return this.items.length;
  }
}

function toArray(str) {
  return str.split(" ");
}

function getResults(arr, count, maxSize) {
  let result = "";
  const stackList = new MyQueueSized(maxSize);
  for (let i = 0; i < count; i++) {
    const temp = arr[i];
    if (temp.length === 1) {
      const calc = stackList[temp]();
      if (calc != undefined) {
        result += `${calc}\n`;
      }
    } else {
      const calc = stackList[temp[0]](Number(temp[1]));
      if (calc != undefined) {
        result += `${calc}\n`;
      }
    }
  }
  return result;
}

function solve() {
  const countCommands = Number(_inputLines[0]);
  const maxSize = Number(_inputLines[1]);
  const commads = [];
  for (let i = 2; i <= countCommands + 1; i++) {
    commads.push(toArray(_inputLines[i]));
  }
  const result = getResults(commads, countCommands, maxSize);
  console.log(result);
}
