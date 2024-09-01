// Check whether the given string is Pallindrome or not
const str = "Madam";
let n = str.length;

function pallindrome(i, n, str) {
  if (i >= Math.floor(n / 2)) return true;

  if (str[i] !== str[n - i - 1]) return false;
  return pallindrome(i + 1, n, str);
}

console.log(pallindrome(0, n, str));
