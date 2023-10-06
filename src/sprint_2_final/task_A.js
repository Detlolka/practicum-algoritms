/*
https://contest.yandex.ru/contest/22781/run-report/91902471/

-- ПРИНЦИП РАБОТЫ --
Я реализовал дек на кольцевом буфере способном двигаться в обе стороны, при добавлении элемента 
в начало очереди, head двигается против часовой стрелки, а при удалении по часовой, tail работает по
зеракальному принципу.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Операции удаления и вставки элементов выполняются за O(1), но учитывая что работа с деком происходит в
цикле, временна сложность алгоритмы  O(n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Дек, содержащий k элементов, занимает O(k) памяти. Плюс константы и сам массив комманд.
Учитывая что константы при расчете сложности не учитываются то пространственная сложность будет 
O(k) + O(n) === O(k + n). Где k - массив элементов в деке, а n - массив комманд.
 */

const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

class Deck {
  constructor(maxSize) {
    this.items = [];
    this.maxSize = maxSize;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  pushFront(value) {
    if (this.isFull()) {
      return "error";
    }
    this.head = this.head === 0 ? this.maxSize - 1 : this.head - 1;
    this.items[this.head] = value;
    this.size += 1;
  }

  pushBack(value) {
    if (this.isFull()) {
      return "error";
    }
    this.items[this.tail] = value;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size += 1;
  }

  popFront() {
    if (this.isEmpty()) {
      return "error";
    }
    const temp = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.size -= 1;
    return temp;
  }

  popBack() {
    if (this.isEmpty()) {
      return "error";
    }
    this.tail = this.tail === 0 ? this.maxSize - 1 : this.tail - 1;
    const temp = this.items[this.tail];
    this.items[this.tail] = null;
    this.size -= 1;
    return temp;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}

function toArray(str) {
  return str.split(" ");
}

function methodsDictionary(method) {
  switch(method) {
    case "push_front":
      return "pushFront";
    case "push_back":
      return "pushBack";
    case "pop_front":
      return "popFront";
    case "pop_back":
      return "popBack";
    default:
      return undefined;    
  }
}

function getResults(arr, count, maxSize) {
  let result = "";
  const stackList = new Deck(maxSize);
  for (let i = 0; i < count; i++) {
    const temp = arr[i];
    if (temp.length === 1) {
      const method = methodsDictionary(temp[0]);
      const calc = stackList[method]();
      if (calc != undefined) {
        result += `${calc}\n`;
      }
    } else {
      const method = methodsDictionary(temp[0]);
      const calc = stackList[method](Number(temp[1]));
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
