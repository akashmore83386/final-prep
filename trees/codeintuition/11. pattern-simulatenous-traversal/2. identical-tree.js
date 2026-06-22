var isSameTree = function (p, q) {
  function dfs(a, b) {
    if (!a && !b) return true;

    if (!a || !b) return false;

    if (a.val !== b.val) return false;

    return dfs(a.left, b.left) && dfs(a.right, b.right);
  }

  return dfs(p, q);
}