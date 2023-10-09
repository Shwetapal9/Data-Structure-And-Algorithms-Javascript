// Write a Polyfill for Apply method
const p1 = {
  firstName: "Shweta",
  lastName: "Pal",
};

function fullName(age, place) {
  console.log(
    this.firstName + " " + this.lastName + ",Age " + " " + age + " " + place
  );
}

let p2 = { firstName: "John", lastName: "Doe" };

//Polyfill
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "is not Callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("createList from Array Like called on non-Array");
  }
  context.fn = this;
  context.fn(...args);
};

fullName.myApply(p2, [25, "Delhi"]);
