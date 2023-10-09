// Write a polyfill for Call Method

const p1 = {
  firstName: "Shweta",
  lastName: "Pal",
};

function fullName(age) {
  console.log(this.firstName + " " + this.lastName + ",Age " + " " + age);
}

let p2 = { firstName: "John", lastName: "Doe" };

fullName.call(p1, 24);

Function.prototype.myCall = function (context={}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not Callable");
  }
    context.fn=this;
    context.fn(...args);
//   console.log(context);
};

fullName.myCall(p2, 25);
