function solve(root, target) {
  if (!root) return false;

  function dfs(node, remainingSum) {
    if (!node) return false;

    // sum has been passed to child nodes after being added, each node has its own copy of remaining sum
    remainingSum = remainingSum - node.val;

    // at the leaf node if the remaining sum is = 0 that means the path is correct and we return true
    if (!node.left && !node.right && remainingSum === 0) {
      return true;
    }

    // recursvely do for the rest of nodes
    return dfs(node.left, remainingSum) || dfs(node.right, remainingSum);
  }

  return dfs(root, target);
}

// Q1: Info flows?    → BOTH! Target passes DOWN, true/false returns UP
// Q2: Global needed? → NO! Each node has its own copy of remainingSum
// Q3: Leaf node?     → Check if remainingSum === 0 → return true/false

// CI calls this "Stateless Root to Leaf" because:

// Each node has its OWN copy of remainingSum ✅
// No shared global variable ✅