function solve(root, k) {
  // if not root then return null
  if (!root) return 0;

  let count = 0;
  let result = 0;

  function dfs(node) {
    if (!node) return null;
    // left side
    dfs(node.left);

    // at the root node, increase the count++
    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    // right side
    dfs(node.right);
  }
  dfs(root);

  return result;
}
