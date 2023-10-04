// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element
//  from the unsorted portion of the list and moving it to the sorted portion of the list.

// Time Complexity: 0(N^2)
// Stability : Unstable
// Advantages of Selection Sort Algorithm
// Simple and easy to understand.
// Works well with small datasets.

// Disadvantages of the Selection Sort Algorithm
// Selection sort has a time complexity of O(n^2) in the worst and average case.
// Does not work well on large datasets.
// Does not preserve the relative order of items with equal keys which means it is not stable.

let arr = [90, 80, 70, 50, 20, 100, 10, 40];
let n = arr.length;

// Selection sort in ascending order
let selectionSortAsc = function (arr, n) {
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// Selection sort for Descending order

function selectionSortDesc(arr, n) {
  for (let i = 0; i < n; i++) {
    let maxId = i;
    for (let j = i; j < n; j++) {
      if (arr[j] > arr[maxId]) {
        maxId = j;
      }
    }
    let temp = arr[maxId];
    arr[maxId] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSortAsc(arr, n));
console.log(selectionSortDesc(arr, n));
