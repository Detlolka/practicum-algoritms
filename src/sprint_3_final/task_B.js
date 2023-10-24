/* 
https://contest.yandex.ru/contest/23815/run-report/94312828/

За основу брался алгоритм быстрой сортировки с доработанными под требования задачи компрататором,
так же была передана функция нахождения опорной точки, для расходования памяти O(1). Для удобства данные
пользователь преобразовал в классы.
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
    return array;
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

function getPivot(array, start, end) {
    const pivot = array[end];

    let index = start - 1;

    for (let i = start; i < end; i++) {
        if (compratator(array[i], pivot)) {
            swapPlayers(array, ++index, i);
        }
    }

    swapPlayers(array, ++index, end);

    return index;
}

function quickSort(array, start, end) {
  if (start >= end) {
    return;
  }

  const pivot = getPivot(array, start, end);

  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
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
  console.log(transformPlayers)
  console.log(transformPlayers.map((el) => el.login).join("\n"));
}
