// Flat an array without using flat-method

let arr = [[1, 2], [3, 4], [5, 6], [7, 8, [9, 10, 11, [12, 13]], 14], 15];

//To handle single depth
let flatArray = arr.reduce((prev, current) => {
  return prev.concat(current);
}, []);
let flat = [].concat(...arr);
console.log(flatArray);
console.log(flat);

// To handle infinite depth

const flatArr = (arr) => {
  return arr.reduce((prev, current) => {
    if (Array.isArray(current)) {
      prev = prev.concat(flatArr(current));
    } else {
      prev.push(current);
    }
    return prev;
  }, []);
};
console.log(flatArr(arr));
