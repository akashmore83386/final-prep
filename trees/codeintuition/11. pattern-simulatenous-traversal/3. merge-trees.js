function solve(root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  function dfs(a, b) {
    if (!a) return b;
    if (!b) return a;

    a.val += b.val;

    a.left = dfs(a.left, b.left);
    a.right = dfs(a.right, b.right);

    return a;
  }

  return dfs(root1, root2);
}