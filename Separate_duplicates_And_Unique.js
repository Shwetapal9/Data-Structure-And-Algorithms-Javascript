// Separate duplicate and Unique values from an Array

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

// Output:
// Unique :[1,5]
// Duplicates: [2,3,4]

function separateDuplicates(arr) {
  const uniqueVal = [];
  const duplicateVal = [];
  const count = {};

  for (let i of arr) {
    if (count[i] === undefined) {
      count[i] = 1;
      uniqueVal.push(i);
    } else {
      if (count[i] === 1) {
        const index = uniqueVal.indexOf(i);
        if (index !== -1) {
          uniqueVal.splice(index, 1);
        }
        duplicateVal.push(i);
      }
      count[i]++;
    }
  }
  return { uniqueVal, duplicateVal };
}

console.log(separateDuplicates(arr));
