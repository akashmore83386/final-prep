function solve(root) {
  if (!root) return false;

  let prevValue = null;
  let hasDuplicate = false;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);

    // check if current node equals previous node
    if (prevValue !== null && node.val === prevValue) {
      hasDuplicate = true;
    }
    prevValue = node.val;

    dfs(node.right);
  }

  dfs(root);
  return hasDuplicate;
}