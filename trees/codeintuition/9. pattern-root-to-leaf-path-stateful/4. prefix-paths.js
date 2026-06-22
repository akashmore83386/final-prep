/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export class Solution {
  prefixPaths(root) {
    if (!root) return [];

    let result = [];
    let currentPath = [];

    const map = new Map();

    function dfs(node, runningSum) {
      if (!node) return [];

      runningSum += node.val;
      currentPath.push(node.val);

      const existedBefore = map.has(runningSum); // check BEFORE adding

      // add current prefix sum to map
      map.set(runningSum, (map.get(runningSum) || 0) + 1);

      // at leaf — check if total path sum exists as a prefix sum
      if (!node.left && !node.right && existedBefore) {
        result.push([...currentPath]);
      }

      dfs(node.left, runningSum);
      dfs(node.right, runningSum);

      currentPath.pop();
      const newCount = map.get(runningSum) - 1;
      if (newCount === 0) {
        map.delete(runningSum); // fully remove when count = 0!
      } else {
        map.set(runningSum, newCount);
      }
    }

    dfs(root, 0);

    return result;
  }
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack + map size = O(h)