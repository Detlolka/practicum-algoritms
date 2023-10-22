/*
https://contest.yandex.ru/contest/23815/run-report/94155224/

За основу был взять алгоритм бинарного поиска с поправкой на сдвиг сторон
к той самой части массива где может быть искомое число. Временная сложность 
соответствует условию и являвется O(logn), пространственная сложность будет равнятся O(1).
*/


function brokenSearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
      return mid;
    }

    if (arr[left] <= arr[mid]) {
      if (k < arr[mid] && k >= arr[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (k > arr[mid] && k <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

