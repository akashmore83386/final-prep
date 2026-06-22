// Given the root of a binary search tree, write a function to convert it in place to an enriched sum tree.

// An enriched sum tree is a binary tree where the value of every node is the sum of its original value and the values of all the nodes greater than it.

//         4                               15
//     2       5          ->           20      11
// 1       3       6                21     18      6

// Now we can observe and check that for each node's new value, it will be the = node's original value + previous node's new value. (We are using the BST property and doing the traversal in the reverse inorder, that is right - root - left)

function solve(root) {
  if (!root) return null;

  let runningSum = 0;

  function dfs(node) {
    if (!node) return;

    dfs(node.right);

    runningSum += node.val;
    node.val = runningSum;

    dfs(node.left);
  }

  dfs(root);

  return root;
}

// This is the same problem in the BOOK as well where the replay is available
// AND also this is the same problem of the leetcode 538 - Convert BST To Greater Tree
// AND again same Leetcode question is there which is - 1038 - Binary Search Tree to Greater Sum Tree