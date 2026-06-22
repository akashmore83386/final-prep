// Given the root of a binary tree, update each node’s value to 1 if the values along the path from the root to that node are strictly increasing, and to 0 otherwise.

// Input: root = [1, 2, 3, 4, null, null, 7]
// Output: [1, 1, 1, 1, null, null, 1]
// Explanation: After updating each node according to the condition above, we get the tree shown above.

// Input: root = [1, 8, 4, null, null, 2, 7]
// Output: [1, 1, 1, null, null, 0, 1]
// Explanation: After updating each node according to the condition above, we get the tree shown above.

function solve(root) {
  if (!root) return 0;

  function dfs(node, prev, isIncreasing) {
    if (!node) return;

    const value = node.val;

    if (isIncreasing && node.val > prev) {
      node.val = 1;

      dfs(node.left, value, true);
      dfs(node.right, value, true);
    } else {
      node.val = 0;

      // Continue to children with isIncreasing = false
      dfs(node.left, 0, false);
      dfs(node.right, 0, false);
    }
  }

  // root is always valid — no parent to compare with
  dfs(root, -Infinity, true);

  return root;
}

//     1
// 8       4
//     2       7

// So the information is passing down, because at each node we need to know the parent value, only then we will be able to say if it is increasing or not. SO what we can do is for the current node we can pass down the information and also a flag called isIncreasing, for the root it will be set to true.

// NOW for the current node we will be checking if the valur for the current node is

// Complexity:

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack