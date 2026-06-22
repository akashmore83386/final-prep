function evenPath(root) {
  if (!root) return false;

  function dfs(node) {
    if (!node) return false;

    // 1. If current node is ODD → return false immediately (path is broken!)
    const isEven = node.val % 2 === 0;

    if (!isEven) return false;

    // 2. If leaf node AND even → return true (valid path found!)
    if (!node.left && !node.right && isEven) return true;

    //         3. Otherwise → recurse left and right
    //  → return true if EITHER side finds a valid path
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack

// 🔑 KEY INSIGHT

// "When a path MUST satisfy a condition for ALL nodes — fail fast! The moment you find a violation, return false immediately. Don't keep exploring a broken path."

// This pattern appears in many FAANG problems! 💪