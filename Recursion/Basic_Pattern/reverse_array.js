// Reverse Array using Recursion

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
//Using two Pointers
// function rev(l,r) {
//     if(l>=r) return
//     [arr[l],arr[r]] = [arr[r],arr[l]];
//     rev(l+1,r-1)
// }

// rev(0,arr.length-1)
// console.log(arr)

// Using Single Pointer

function rev(i) {
  if (i >= n / 2) return;
  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
  rev(i + 1);
}

rev(0);
console.log(arr);
