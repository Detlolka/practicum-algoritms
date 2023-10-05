/*
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

  push_front(value) {
    if (this.is_full()) {
      return "error";
    }
    this.head = this.head === 0 ? this.maxSize - 1 : this.head - 1;
    this.items[this.head] = value;
    this.size += 1;
  }

  push_back(value) {
    if (this.is_full()) {
      return "error";
    }
    this.items[this.tail] = value;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size += 1;
  }

  pop_front() {
    if (this.is_empty()) {
      return "error";
    }
    const temp = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.size -= 1;
    return temp;
  }

  pop_back() {
    if (this.is_empty()) {
      return "error";
    }
    this.tail = this.tail === 0 ? this.maxSize - 1 : this.tail - 1;
    const temp = this.items[this.tail];
    this.items[this.tail] = null;
    this.size -= 1;
    return temp;
  }

  is_full() {
    return this.size === this.maxSize;
  }

  is_empty() {
    return this.size === 0;
  }
}

function toArray(str) {
  return str.split(" ");
}

function getResults(arr, count, maxSize) {
  let result = "";
  const stackList = new Deck(maxSize);
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
