function solve(root) {
  if (!root) return 0;

  // global variable
  let moves = 0;

  function dfs(node) {
    if (!node) return 0;

    // at current node we need the left and right access
    let leftAccess = dfs(node.left);
    let rightAccess = dfs(node.right);

    // we need to get the leftAccess and rightAccess absolute sum of both at current node
    let absoluteSum = Math.abs(leftAccess) + Math.abs(rightAccess);

    moves += absoluteSum;

    // at the parent we need to return the coins except one, because that one coin we will keep for the current node
    return node.val - 1 + leftAccess + rightAccess;
  }

  dfs(root);

  return moves;
}

// return node.val - 1 + leftAccess + rightAccess

// This means:

// node.val - 1 → coins this node has minus the 1 it keeps
// + leftAccess → excess/deficit from left subtree
// + rightAccess → excess/deficit from right subtree
// Total = net coins flowing through the edge to parent!

//         3
//        / \
//       0   0

// dfs(0 left)  → return 0-1+0+0 = -1 (needs 1 coin)
// dfs(0 right) → return 0-1+0+0 = -1 (needs 1 coin)
// dfs(3 root)  → moves += |(-1)| + |(-1)| = 2
//              → return 3-1+(-1)+(-1) = 0 ✅

// moves = 2 ✅

// "Each node returns its NET coin flow — positive means surplus, negative means deficit. Absolute value of that = coins crossing that edge = moves!"