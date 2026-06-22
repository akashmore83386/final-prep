//     -10
// 9          20
//         15     7

// max path sum is - 42 from 15, 7, 20.

// KIND OF SIMILAR CODEINTUITION QUESTION - // [images/2. maximum-path-sum-leetcode_2026-04-20-09-36-46.png]
function maximumPathSum(root) {
  // if the tree is empty then return 0
  if (!root) return 0;

  // global variable
  let maxPathSum = 0;

  // applied the dfs (postorder)
  function dfs(node) {
    if (!node) return 0;

    // get the left gain and right gain for the current node, so that we can update the max path sum for the current node
    let leftGain = Math.max(dfs(node.left), 0);
    let rightGain = Math.max(dfs(node.right), 0);

    // Update max path sum, by adding the current node's value + left gain + right gain
    maxPathSum = Math.max(maxPathSum, node.val + leftGain + rightGain);

    // return the current node's value and maximum of the leftGain and right gain, because we can not pass both, we need one path
    return node.val + Math.max(leftGain, rightGain);
  }

  dfs(root);

  return maxPathSum;
}
