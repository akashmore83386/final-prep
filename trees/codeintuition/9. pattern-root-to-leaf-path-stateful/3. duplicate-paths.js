/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export class Solution {
  duplicatePaths(root) {
    if (!root) return [];

    let result = [];

    const currentPath = [];

    const map = new Map();

    function dfs(node) {
      if (!node) return;

      currentPath.push(node.val);

      if (!node.left && !node.right) {
        const key = currentPath.join(","); // "1,2"
        map.set(key, (map.get(key) || 0) + 1);
      }

      dfs(node.left);
      dfs(node.right);
      currentPath.pop();
    }

    dfs(root);

    // filter paths that appear more than once
    for (const [key, count] of map) {
      if (count > 1) {
        result.push(key.split(",").map(Number));
        // "1,2" → ["1","2"] → [1,2]
      }
    }

    return result;
  }
}