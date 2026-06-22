// Given the root of a binary search tree and a range represented by low and high, write a function to update each non-leaf node whose value lies within the range with the number of leaf nodes in its subtree whose values also lie within the same range.

// It is guaranteed that if a node's value is outside [low, high], all nodes in its left and right subtrees are also out of range.

// Input: root = [4, 2, 5, 1, 3, null, 6], low = 2, high = 5
// Output: [1, 1, 0, 1, 3, null, 6]
// Explanation: Once all non-leaf nodes within the specified range have been updated to reflect the count of leaf nodes in their subtrees that also lie within the range, the resulting tree is as illustrated above.

// Input: root = [5, 1, 8, null, null, 6, 9], low = 6, high = 9
// Output: [5, 1, 2, null, null, 6, 9]
// Explanation: Once all non-leaf nodes within the specified range have been updated to reflect the count of leaf nodes in their subtrees that also lie within the range, the resulting tree is as illustrated above.

// [2, 5]
//         4                                1
//     2       5              ->        1       0
// 1       3       6                1       3        6

// ------------------------------------------------------------------

// [6, 9]
//     5                                    5
// 1       8                  ->        1       2
//     6       9                            6       9

// We need to only update the internal node's which are in the range.
// We need to update that node's value such a way that we need to update the nodes value to number of leave nodes it has in its subtree (Condition that leaf node should also be in the same range)

// Approach - What does the every node returns to its parent? At the leaf node we check if the node is in the range or not, if it is in the range then we return 1 to parent

// At the parent we get the left subtree and right subtree leaf node's count which is in the range and then we update with that count

function solve(root, low, high) {
  // base case
  if (!root) return null;

  function dfs(node) {
    if (!node) return 0;

    // Check against the nodes
    if (node.val < low) return dfs(node.right);
    if (node.val > high) return dfs(node.left);

    // For the leaf node return 1 to parent
    if (!node.left && !node.right) return 1;

    // for any other node which is in range
    let left = dfs(node.left);
    let right = dfs(node.right);

    // Update the value of the node
    node.val = left + right;

    return left + right;
  }

  dfs(root);

  return root;
}