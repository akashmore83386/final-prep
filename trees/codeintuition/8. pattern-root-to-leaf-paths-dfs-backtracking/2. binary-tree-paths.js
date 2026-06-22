function solve(root) {
  let result = [];

  function dfs(node, string) {
    if (node === null) return;

    string = string + node.val + `${!node.left && !node.right ? "" : "->"}`;

    if (!node.left && !node.right) {
      result.push(string);
    }

    dfs(node.left, string);
    dfs(node.right, string);
  }

  dfs(root, "");

  return result;
}