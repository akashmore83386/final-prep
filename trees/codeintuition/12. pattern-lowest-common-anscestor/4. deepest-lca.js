function deepestLCA(root) {
  function dfs(node) {
    // base case: null node returns depth 0
    if (!node) return { node: null, depth: 0 };

    // recurse left and right (postorder!)
    let left = dfs(node.left);
    let right = dfs(node.right);

    // deepest leaves on both sides → current node is LCA
    if (left.depth === right.depth) {
      return { node: node, depth: left.depth + 1 };
    }

    // deepest leaves only on left
    if (left.depth > right.depth) {
      return { node: left.node, depth: left.depth + 1 };
    }

    // deepest leaves only on right
    return { node: right.node, depth: right.depth + 1 };
  }

  return dfs(root).node;
}