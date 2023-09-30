// Insert the value in a array without using in-built methods

let arr = [1, 2, 3, 4, 5];
let value = 10;
// 1) At Start

let atStart = function (arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr;
};

// console.log(atStart(arr, value));

// At a particular location
let loc = 3;
let atLoc = function (arr, val, loc) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= loc) {
      arr[i + 1] = arr[i];
      if (i == loc) {
        arr[i] = val;
      }
    }
  }

  return arr;
};
console.log(arr);
// console.log(atLoc(arr, value, loc));

// At the End
let atEnd = function (arr, val) {
  arr[arr.length] = val;
  return arr;
};
console.log(atEnd(arr, value));
