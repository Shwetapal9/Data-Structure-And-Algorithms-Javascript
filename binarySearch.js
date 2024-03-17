//TC = O(log(n));

let arr = [1, 3, 5, 9, 15, 30, 55];

function binarySearch(arr, target) {
  let l = 0;
  let h = arr.length - 1;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 0));
