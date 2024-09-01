// Sort an Array using Bubble Sort
// Time Complexity = O(n^2);
// Stability = stable

// Advantages of Bubble Sort:
// Bubble sort is easy to understand and implement.
// It does not require any additional memory space.
// It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.

// Disadvantages of Bubble Sort:
// Bubble sort has a time complexity of O(N2) which makes it very slow for large data sets.
// Bubble sort is a comparison-based sorting algorithm, which means that it requires a comparison operator to determine the relative order of elements in the input data set.
//  It can limit the efficiency of the algorithm in certain cases.

let arr = [90, 80, 70, 50, 20, 100, 10, 40];
let n = arr.length;
let bubbleSort = function (arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr;
};
console.log(bubbleSort(arr));
