// given Two arrays having different length, find the sum of elements at each Index

let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 2, 4, 1, 6, 11];

function sum(a1, a2) {
  let ans = [];
  for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
    ans.push(a1[i] || 0 + a2[i] || 0);
  }
  return ans;
}

console.log(sum(array1, array2));
