// Bimnary Search tree implementation

//Node class to define the nodes structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// binary search tree class
class BST {
  constructor() {
    this.root = null; // initially the root is empty/points to null
  }

  //method to check whether the tree is empty or not
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //function to insert NewNode when root is not null
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // function to search the node with given value
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value < value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  // Tree Traversals
  // Depth First Search -DFS

  // PreOrder Traversal - Root,Left, Right
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // InOrder Traversal - Left,Root,Right
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Post-Order traversal - Left,Right Root

  postOrder(root) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(10);
bst.insert(3);
bst.insert(11);
bst.insert(1);
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 1));
bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

// console.log(bst.isEmpty());
