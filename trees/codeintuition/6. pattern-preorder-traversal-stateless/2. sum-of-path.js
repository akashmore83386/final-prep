// In plain words:

// The root node never changes (its path is just itself).
// Every other node gets its original value plus the original values of all its ancestors (parent + grandparent + ... + root).
// After we're done, if you look at any node, its .val now holds the complete path sum from root to it (using the original numbers before any changes).
// The tree structure (left and right pointers) stays exactly the same. Only the values change.

//        5
//       / \
//      3   8
//     /
//    2

//    Path sums (using original values):

// Root (5) → path = [5] → sum = 5
// Node 3 → path = [5 → 3] → sum = 5 + 3 = 8
// Node 2 → path = [5 → 3 → 2] → sum = 5 + 3 + 2 = 10
// Node 8 → path = [5 → 8] → sum = 5 + 8 = 13

//        5
//       / \
//      8   13
//     /
//    10

//    Every node now stores its own root-to-node path sum.

function solve(root) {
  if (!root) return null;

  function dfs(node, pathSum) {
    if (!node) return;

    pathSum += node.val;
    node.val = pathSum;

    dfs(node.left, pathSum);
    dfs(node.right, pathSum);
  }

  dfs(root, 0);

  return root;
}