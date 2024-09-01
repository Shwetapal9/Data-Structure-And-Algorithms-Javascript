// Problem: Given an object where the keys are strings and the values are numbers,
//  find the key with the maximum value.

const scores = { Alice: 100, Bob: 75, Charlie: 0 };

const keys = Object.keys(scores);

console.log(keys);
let val;
const maxValue = keys.reduce((prev, curr) => {
  if (scores[prev] > scores[curr]) {
    val = scores[prev];
  }
  return [prev,val];
});

console.log(maxValue);
