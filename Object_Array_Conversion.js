// Convert from Arrays to Objects
// Arrays--->Objects

// Methods--> 1) Object.fromEntries(): method transform an array of key-value pairs into an object
//            2) Spread Syntax -->unpacks the values of an array into a new object
//            3) Object.assign({},arr)--> returns an object where keys are the array indexs and values are the array elements

let arr = [
  ["name", "Shweta"],
  ["age", "24"],
];

const obj1 = Object.fromEntries(arr);
console.log(obj1); //{ name: 'Shweta', age: '24' }
const obj2 = { ...arr };
console.log(obj2); //{ '0': [ 'name', 'Shweta' ], '1': [ 'age', '24' ] }
const obj3 = Object.assign({}, arr);
console.log(obj3); //{ '0': [ 'name', 'Shweta' ], '1': [ 'age', '24' ] }

// Convert from  Objects to Arrays
// Objects ---> Arrays

const zoo = {
  lion: "Shweta",
  panda: "You",
};

// keys as array elements
console.log(Object.keys(zoo)); //[ 'lion', 'panda' ]

// values as array elements
console.log(Object.values(zoo)); //[ 'Shweta', 'You' ]
console.log(Object.entries(zoo)); //[ [ 'lion', 'Shweta' ], [ 'panda', 'You' ] ]
