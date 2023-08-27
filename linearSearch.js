//Implement Liner Search in JavaScript
// Write function to search "target" in array.If target exists,then return its index.
//Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

//Input arr= [4,5,7,0,1,2], target = 0 ------> Output: 4
//Input arr= [4,5,7,0,1,2], target = 3 ------> Output: -1

//Function for Linear Search
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// console.log(linearSearch([4, 5, 7, 0, 1, 2], 3));

// NOTE: Linear Search Can also be considered as a Pollyfill for find method of array in JavaScript.

// Global linear Search
const arr = [4, 5, 7, 0, 1, 2, 0];
const ans = [];
const globalLinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      ans.push(i);
    }
  }
  if (ans.length === 0) return -1;
  return ans;
};
console.log(globalLinearSearch(arr, 0));
