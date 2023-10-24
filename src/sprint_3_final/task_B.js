/* 
https://contest.yandex.ru/contest/23815/run-report/94311975/

За основу брался алгоритм быстрой сортировки с доработанными под требования задачи компрататором,
так же была передана функция нахождения опорной точки, для расходования памяти O(1). Пробовал для удобство делать 
через класс, но не прошел по Tl, возможно из за еще одного прохождения по массиву. 
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


class Player {
    constructor(login, tasks, penalty) {
      this.login = login;
      this.tasks = Number(tasks);
      this.penalty = Number(penalty);
    }
  }

  
function swapPlayers(array, pl1, pl2) {
    const swap = array[pl1];
    array[pl1] = array[pl2];
    array[pl2] = swap;
}

function compratator(one, two) {
    if (one.tasks !== two.tasks) {
        return one.tasks > two.tasks
    }
    if (one.penalty !== two.penalty) {
        return one.penalty < two.penalty;
    }
    return one.login < two.login;
}

function getPivot(arr, left, right) {
    const pivot = arr[Math.floor(Math.random() * (right - left) + left)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (compratator(arr[i], pivot)) {
            i++;
        }
        while (compratator(pivot, arr[j])) {
            j--;
        }
        if (i <= j) {
            swapPlayers(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        const index = getPivot(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function solve() {
  const n = Number(_inputLines[0]);
  const players = [];
  for (let i = 1; i <= n; i++) {
    players.push(_inputLines[i].split(" "));
  }
  const transformPlayers = players.map(
    (el) => new Player(el[0], el[1], el[2])
  );
  quickSort(transformPlayers, 0, transformPlayers.length - 1);
  console.log(transformPlayers.map((el) => el.login).join("\n"));
}
