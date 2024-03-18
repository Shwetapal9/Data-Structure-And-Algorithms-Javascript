class Stack {
  constructor() {
    this.stack = [];
  }

  //Add element in stack
  push(val) {
    this.stack.push(val);
  }

  //Remove element from stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.stack.pop();
  }

  //Check if the stack is empty or not
  isEmpty() {
    return this.size() === 0;
  }

  // Return topmost element

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.stack[this.size() - 1];
  }

  //returns the size of Stack
  size() {
    return this.stack.length;
  }

  //prints the stack Elements
  print() {
    if (this.isEmpty()) return "Stack is Empty";
    for (let i = 0; i < this.size(); i++) {
      console.log(this.stack[i]);
    }
  }
}

const S1 = new Stack();
S1.push(1);
S1.push(2);
S1.push(3);
S1.push(4);
S1.push(5);
S1.print();
console.log(S1.pop());
// console.log(S1.peek());
console.log(S1.isEmpty());
console.log(S1.pop());
console.log(S1.pop());
console.log(S1.pop());
console.log(S1.pop());
console.log(S1.pop());
S1.print();
