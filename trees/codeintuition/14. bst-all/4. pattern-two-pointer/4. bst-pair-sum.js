// Given the roots of two binary search trees, rootA and rootB, and an integer value target, write a function that returns true if a pair of nodes (one node from each tree) exists that sum up to the target. Return false if no such pair exists.

// Input: rootA = [4, 2, 6, 1, null, null, 7], rootB = [2, 1, 4, null, null, 3, 8], target = 15
// Output: true

// Explanation: The node with value 7 from the first tree and the node with value 8 from the second tree sum up to 15.

// Input: rootA = [4, 2, 6, 1, null, null, 7], rootB = [2, 1, 4, null, null, 3, 8], target = 35
// Output: false

// Explanation: A sum of 35 cannot be made using the above trees.

// Notice — exact same two pointer logic as Two Sum, just:

// left iterates over rootA
// right iterates over rootB

// 🤔 What's the terminating condition here? In Two Sum it was leftNode.val < rightNode.val — does that same condition work here?

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

function solve(rootA, rootB, target) {
  if (!rootA || !rootB) return false;

  let left = new ForwardIterator(rootA);
  let right = new ReverseIterator(rootB);

  let leftNode = left.next();
  let rightNode = right.next();

  while (leftNode && rightNode) {
    let sum = leftNode.val + rightNode.val;
    if (sum === target) return true;
    if (sum < target) leftNode = left.hasNext() ? left.next() : null;
    if (sum > target) rightNode = right.hasNext() ? right.next() : null;
  }

  return false;
}