// Merge two arrays Using for Loop

let arr1 = [1, 2, 3, 4, 5, 6, 17, 20];
let arr2 = [7, 8, 9, 10, 15, 19, 18];

let mergedArray = function (arr1, arr2) {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    res[i] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    res[res.length++] = arr2[i];
  }
  return res;
};

console.log(mergedArray(arr1, arr2));

//Merge Two arrays using While Loop in increasing order
let j = 0,
  k = 0,
  a = 0;
let ans = [];
while (j < arr1.length && k < arr2.length) {
  if (arr1[j] <= arr2[k]) {
    ans[a++] = arr1[j++];
  } else {
    ans[a++] = arr2[k++];
  }
}
while (j < arr1.length) {
  ans[a++] = arr1[j++];
}
while (k < arr2.length) {
  ans[a++] = arr1[k++];
}
console.log(ans);
