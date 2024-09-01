// Write a Recursive function for fibonacci

function fibonacci(n) {
  if (n <= 1) return n;
  let last = fibonacci(n - 1);
  let slast = fibonacci(n - 2);
  return last + slast;
}

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(2));
console.log(fibonacci(4));
