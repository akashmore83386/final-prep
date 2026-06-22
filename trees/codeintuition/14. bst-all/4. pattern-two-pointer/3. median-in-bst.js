// Median in BST

// Given the root of a binary search tree, write a function to find and return the median value of this tree. The value should be rounded down to the nearest integer.

// The median in a binary search tree is the middle value when the nodes are arranged in sorted order. If the number of nodes is odd, it's the middle node, and if even, it's the average of the two middle nodes.

// Input: root = [5, 4, 6, 2, null, null, 7]
// Output: 5

// Explanation: Since there is an odd number of nodes, the median is 5, which is the middle node of the binary search tree.

// Input: root = [10, 8, 14, 5, null, 13, 17]
// Output: 11

// Explanation: Since there is an even number of nodes, the median is the average of the two middle nodes. (10 + 13) / 2 = 11.5, which rounds down to 11.

// example
//         5
//     4       6        ->    [2, 4, 5, 6, 7], since the total number of nodes are odd then the median
// 2               7            is 5

// example
//         10
//     8       14       ->     [5, 8, 10, 13, 14, 17] since the number of nodes are even, we have to
// 5       13      17           take the median of the 2 internal nodes, 10 + 13 / 2 = 11.5, we round it off to 11

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

function solve(root) {
  if (!root) return -1;
  let left = new ForwardIterator(root);
  let right = new ReverseIterator(root);

  let leftNode = left.next();
  let rightNode = right.next();

  while (leftNode.val < rightNode.val) {
    // move both pointers
    leftNode = left.next();
    rightNode = right.next();
  }

  // handle odd vs even
  if (leftNode.val === rightNode.val) {
    // odd case
    return leftNode.val;
  } else {
    // even case - they crossed
    return Math.floor((leftNode.val + rightNode.val) / 2);
  }
}