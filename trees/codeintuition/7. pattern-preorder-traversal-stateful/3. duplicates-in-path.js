// Given the root of a binary tree, write a function that returns the number of nodes in the tree where the path from the root to that node contains another node with the same value.

function solve(root) {
  let count = 0;

  let seen = new Set();

  function dfs(node) {
    if (!node) return;

    const isDuplicate = seen.has(node.val);

    if (isDuplicate) count++;

    if (!isDuplicate) {
      seen.add(node.val);
    }

    dfs(node.left);
    dfs(node.right);

    if (!isDuplicate) {
      seen.delete(node.val);
    }
  }

  dfs(root);

  return count;
}