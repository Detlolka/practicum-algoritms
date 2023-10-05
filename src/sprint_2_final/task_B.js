/*
-- ПРИНЦИП РАБОТЫ --
Реализация была через стек, с внутренней функцией вычисления, если на вход приходило число оно пушилось в стек,
если знак операции то вызывалась функция вычисления с добавлением результата наверх стека. В качестве результата
бралось верхнее значение из стека.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Операция добавление элемента выполнялась за O(1), так как число помещалось в конец массива, а не в начало, 
что спровоцировало бы сдвиг всех элементов сдвиг всех элементов право. Операции извлечения чисел с последующим
помещением результата тоже выполняются за O(1). Но из за цикла с проходом по всему массиву итоговая сложность
получилась O(n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность все так же из за цикла и постоянного хранения в памяти всех по очереди элементов
так же получилась O(n).
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

class Calculating {
  constructor() {
    this.currentSum = 0;
    this.items = [];
  }

  push(item) {
    const x = Number(item);
    if (isNaN(x)) {
        this.calcNewCurrentSum(item)
    } else {
        this.items.push(x);
    }
  }

  calcNewCurrentSum(operator) {
    const num2 = this.items.pop();
    const num1 = this.items.pop();
    switch (operator) {
      case "*":
        this.currentSum = num1 * num2;
        break;
      case "/":
        this.currentSum = Math.floor(num1 / num2);
        break;
      case "-":
        this.currentSum = num1 - num2;
        break;
      case "+":
        this.currentSum = num1 + num2;
        break;
      default:
        this.currentSum = 0;
        break;
    }
    this.items.push(this.currentSum);
  }

  getCurrentSum() {
    return this.items[this.items.length - 1];
  }
}

function toArray(str) {
  return str.split(" ");
}

function getResults(arr) {
    const calc = new Calculating();
    for (let i = 0; i < arr.length; i++) {
        calc.push(arr[i]);
    }
    return calc.getCurrentSum()
}

function solve() {
  const calcData = toArray(_inputLines[0]);
  const result = getResults(calcData);
  console.log(result);
}
