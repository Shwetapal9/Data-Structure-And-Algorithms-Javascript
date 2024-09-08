// Implementation of Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  insertAtIndex(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeAtIndex(index){
    if(index < 0 || index >= this.size) return null
    if(index === 0){
      
    }

  }
  print() {
    if (this.isEmpty()) {
      console.log("LIST IS EMPTY");
      return;
    }
    let curr = this.head;
    let listvalues = "";
    while (curr) {
      listvalues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listvalues);
  }
}

const list = new LinkedList();
console.log("List is empty? ", list.isEmpty());
list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.append(35);
list.append(55);
list.insertAtIndex(16, 1);
list.print();
