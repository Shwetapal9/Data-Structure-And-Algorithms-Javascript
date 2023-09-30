// delete Elements from an Array without using in-built methods

let arr = [1, 2, 3, 4, 5];
// 1) At Start
const deleteAtStart = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};

console.log(deleteAtStart(arr));

// 2) At a particular location
let pos = 2;
const deleteAtPos = function (arr, pos) {
  for (let i = pos; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};
console.log(deleteAtPos(arr, pos));

// 3) At End
const deleteAtEnd = function (arr) {
  arr.length = arr.length - 1;
  return arr;
};
console.log(deleteAtEnd(arr));
console.log(deleteAtEnd(arr));
console.log(deleteAtEnd(arr));

