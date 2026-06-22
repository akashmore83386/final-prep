/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.stack = [];
  // Initialize by pushing all the left children of the root
  this._pushAllLeft(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // The top of the stack is always the next smallest element
  let node = this.stack.pop();

  // If the popped node has a right child, we must process its leftmost branch
  if (node.right !== null) {
    this._pushAllLeft(node.right);
  }

  return node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  // If the stack is not empty, there is a next element available
  return this.stack.length > 0;
};

/**
 * Helper method to push a node and all of its left descendants onto the stack.
 * @param {TreeNode} node
 */
BSTIterator.prototype._pushAllLeft = function (node) {
  while (node !== null) {
    this.stack.push(node);
    node = node.left;
  }
};