/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export class Solution {
  iterativePostorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;

    // Iterate until the current node is null and the stack is empty
    while (current || stack.length > 0) {
      // Traverse the left subtree and push nodes twice into the
      // stack
      while (current) {
        stack.push(current);

        // Push the node twice to indicate it's not yet processed
        stack.push(current);
        current = current.left;
      }

      // Retrieve the top node from the stack
      current = stack.pop();

      // Check if the next node on top of the stack is the same as
      // the current node If yes, it means the right subtree of the
      // current node hasn't been processed yet
      if (stack.length > 0 && current === stack[stack.length - 1]) {
        // Move to the right subtree
        current = current.right;
      }

      // Otherwise, the right subtree has been processed and we can
      // add the current node to the result list and set current to
      // null
      else {
        // Add the value of the current node to the result
        result.push(current.val);

        // Set current to null to avoid revisiting the node
        current = null;
      }
    }
    return result;
  }
}