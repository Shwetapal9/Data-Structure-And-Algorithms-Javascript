// Implement the merge Sort

// Time Complexity: O(nlogn);

let arr = [9, 8, 7, 6, 39, 45, 55];

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);

  let leftHalf = arr.slice(0, mid);
  let rightHalf = arr.slice(mid);

  const sortedleft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  return merge(sortedleft, sortedRight);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  while (left.length) {
    sortedArr.push(left.shift());
  }

  while (right.length) {
    sortedArr.push(right.shift());
  }

  return sortedArr;
}

console.log(mergeSort(arr)); //6,  7,  8, 9, 39, 45, 55
