// Given the root of a binary search tree, write a function that returns true if, for every pair of nodes formed by taking one node from the start and one from the end of the in-order traversal, the node from the end is a multiple of the node from the start. Return false otherwise.

//             4
//         2       6          -> true
//     1               7

// Explanation: For every pair of nodes from the start and end of an in-order traversal, the end node is a multiple of the start node.

class ForwardIterator {
  constructor(root) {
    this.stack = [];
    this.pushLeft(root); // push all left nodes first
  }

  pushLeft(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next() {
    let node = this.stack.pop();
    this.pushLeft(node.right); // explore right subtree
    return node;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

class ReverseIterator {
  constructor(root) {
    this.stack = [];
    this.pushRight(root); // push all left nodes first
  }

  pushRight(node) {
    while (node) {
      this.stack.push(node);
      node = node.right;
    }
  }

  next() {
    let node = this.stack.pop();
    this.pushRight(node.left); // explore right subtree
    return node;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

// main function

function solve(root) {
    if(!root) return false

    let left = new ForwardIterator(root)
    let right = new ReverseIterator(root)

    let leftNode = left.next()
    let rightNode = right.next()

    while(leftNode.val < rightNode.val) {
        // check if rightNode is multiple of leftNode
        if(rightNode.val % leftNode.val !== 0) return false  // condition fails → return false immediately

        // move BOTH pointers
        leftNode = left.next()
        rightNode = right.next()
    }

    return true  // all pairs passed!
}