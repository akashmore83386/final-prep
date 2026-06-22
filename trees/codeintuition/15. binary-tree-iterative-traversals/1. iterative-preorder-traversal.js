/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export class Solution {
  iterativePreorderTraversal(root) {
    // Create a list to store the result of preorder traversal
    const result = [];

    // Create a stack to help traverse the binary tree iteratively
    const stack = [];

    // Start from the root node
    let current = root;

    // Continue traversal until we reach the end of the tree (current
    // is null) and the stack is empty
    while (current || stack.length > 0) {
      // Traverse to the leftmost node and store the node values in
      // the result list
      while (current) {
        result.push(current.val);
        stack.push(current);
        current = current.left;
      }

      // If the current node is null, reached the leftmost leaf or
      // subtree we backtrack to the parent node by popping from
      // the stack and move to its right subtree.
      current = stack.pop();
      current = current.right;
    }

    // Return the result list containing the preorder traversal of
    // the binary tree
    return result;
  }
}