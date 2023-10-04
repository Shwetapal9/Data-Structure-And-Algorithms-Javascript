// Write an algo to implement Insertion sort
// Time Complexity: O(N^2) 
// Auxiliary Space: O(1)
// Stable

// Complexity Analysis of Insertion Sort:
// Time Complexity of Insertion Sort
// The worst-case time complexity of the Insertion sort is O(N^2)
// The average case time complexity of the Insertion sort is O(N^2)
// The time complexity of the best case is O(N).
// Space Complexity of Insertion Sort
// The auxiliary space complexity of Insertion Sort is O(1)

// Characteristics of Insertion Sort
// This algorithm is one of the simplest algorithms with a simple implementation
// Basically, Insertion sort is efficient for small data values
// Insertion sort is adaptive in nature, i.e. it is appropriate for data sets that are already partially sorted.

let arr = [90, 60, 10, 5, 12, 33, 1];
function insertionSort(arr) {
  let i, j;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort(arr));
