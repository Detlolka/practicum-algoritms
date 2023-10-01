const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class MyQueueList {
  constructor() {
    this.head = null;
    this.top = null;
    this.sizeList = 0;
  }

  put(item) {
    const newItem = new Node(item);
    if (this.head === null && this.top === null) {
      this.head = newItem;
      this.top = newItem;
    } else {
      const swapTop = this.top;
      swapTop.next = newItem;
      this.top = newItem;
    }
    this.sizeList += 1;
  }

  get() {
    if (!this.sizeList) {
      return "error";
    } else if (this.sizeList === 1) {
      const value = this.head.value;
      this.top = null;
      this.head = null;
      this.sizeList = 0;
      return value;
    } else {
      const swapHead = this.head;
      this.head = swapHead.next;
      this.sizeList -= 1;
      return swapHead.value;
    }
  }

  size() {
    return this.sizeList;
  }
}

function toArray(str) {
  return str.split(" ");
}

function getResults(arr, count) {
  let result = "";
  const stackList = new MyQueueList();
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
  const commads = [];
  for (let i = 1; i <= countCommands; i++) {
    commads.push(toArray(_inputLines[i]));
  }
  const result = getResults(commads, countCommands);
  console.log(result);
}
