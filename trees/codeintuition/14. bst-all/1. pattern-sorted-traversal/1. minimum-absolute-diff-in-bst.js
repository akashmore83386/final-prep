/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  if (!root) return 0;

  let minDiff = Infinity;

  let prevValue = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);

    if (prevValue !== null) {
      let absDiff = Math.abs(prevValue - node.val);
      minDiff = Math.min(minDiff, absDiff);
    }

    prevValue = node.val;

    dfs(node.right);
  }

  dfs(root);

  return minDiff === Infinity ? 0 : minDiff;
};
