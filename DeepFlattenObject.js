// Given a nested Object which can have any type of object, deep flatten it and return the new object in JS

const nested = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const flatten = (obj, prefix) => {
  let output = {};

  for (let k in obj) {
    console.log("key:"+ k,"value:", obj[k]);
    let val = obj[k];
    console.log(prefix);
    //new key
    const newKey = prefix ? prefix + "." + k : k;
    console.log(newKey);
    //array and object both are object in js

    if (typeof val === "object") {
      if (Array.isArray(val)) {
        const { ...arrToObj } = val;
        const newObj = flatten(arrToObj, newKey);
        output = { ...output, ...newObj };
      } else {
        const newObj = flatten(val, newKey);
        output = { ...output, ...newObj };
      }
    }
    //normal value
    else {
      output = { ...output, [newKey]: val };
      console.log(output);
    }
  }
  return output; //{ A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }
};



console.log(flatten(nested));
