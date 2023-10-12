let person = {
  firstname: "Kirtesh",
  lastname: "bansal",
};

let printName = function (country) {
  console.log(this.firstname + " " + this.lastname + " from " + country);
};

// let newPrintName = printName.bind(person, "India");
// newPrintName();

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not Callable");
  }
  context.fn = this;
  return function (newargs) {
    return context.fn(...args, newargs);
  };
};

let newPrintName = printName.myBind(person, "India");
newPrintName();
