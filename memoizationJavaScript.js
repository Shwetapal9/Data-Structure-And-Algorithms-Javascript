// Implement Memoization in JavaScript.

// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and
// returning the result from it.

function calc(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

const memoized = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("calculating from cache");
      return cache[n];
    } 
    console.log("calculating first time");
    let result = fun(n);
    cache[n] = result;
    return result;
  };
};
console.time();
const eff = memoized(calc);
console.log(eff(5));
console.timeEnd();

console.time();
console.log(eff(5));
console.timeEnd();
