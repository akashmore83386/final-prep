/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export class Solution {
  balanceFactor(root) {
    if (!root) return 0;

    let left = this.height(root.left);
    let right = this.height(root.right);

    return left - right;
  }

  height(node) {
    if (!node) return 0;

    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
}