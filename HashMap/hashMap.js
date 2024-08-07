// Creating and manipulating Hashmap

// definition---->  HashMap is a data structure in JavaScript that allows you to store key-value pairs.
//  It provides fast access to values based on their keys and is commonly used to optimize lookup operations


// HashMap creation
const hashMap = new Map();
hashMap.set('name','John');
hashMap.set('age', 30)

// data retrieval
const name = hashMap.get('name');
console.log(name)  //output ---> 'John'

// to check if key exist in hashmap ?

const hasAge = hashMap.has('age')
console.log(hasAge)   //Output--> true

// To remove a key-value pair from the HashMap, you can use the delete() method.

hashMap.delete('age');
console.log(hashMap)

// to get the size of hm
console.log(hashMap.size)
