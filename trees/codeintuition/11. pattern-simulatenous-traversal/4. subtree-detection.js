function solve(root1, root2) {
  // if root1 is null then root2 can't be subtree
  if (!root1) return false;

  // if current node matches the root b exactly
  if (isSameTree(root1, root2)) return true;

  // check left subtree or the right subtree
  return solve(root1.left, root2) || solve(root1.right, root2);
}

var isSameTree = function (p, q) {
  function dfs(a, b) {
    if (!a && !b) return true;

    if (!a || !b) return false;

    if (a.val !== b.val) return false;

    return dfs(a.left, b.left) && dfs(a.right, b.right);
  }

  return dfs(p, q);
};