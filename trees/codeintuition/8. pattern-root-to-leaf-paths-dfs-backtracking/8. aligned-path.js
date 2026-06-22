// Depth 0:        0          → value=0, depth=0 → ALIGNED ✅
//                / \
// Depth 1:      1   5        → value=1, depth=1 → ALIGNED ✅
//              /             → value=5, depth=1 → NOT aligned ❌
// Depth 2:    2              → value=2, depth=2 → ALIGNED ✅

function alignedPath(root) {
  let res = 0;

  function dfs(node, depth) {
    if (!node) return 0;

    let leftChain = dfs(node.left, depth + 1);
    let rightChain = dfs(node.right, depth + 1);

    if (node.val === depth) {
      res = Math.max(res, 1 + leftChain + rightChain);
      return 1 + Math.max(leftChain, rightChain);
    } else {
      // break the chain
      return 0;
    }
  }

  dfs(root, 0);
  return res;
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack

// 🔑 KEY INSIGHT

// "Aligned Path = Diameter pattern + depth awareness! Pass depth DOWN (Preorder), pull chain length UP (Postorder), update global using BOTH sides."

// This problem beautifully combines TWO patterns:
// Pass DOWN  → depth (to check alignment)
// Pull UP    → chain length (to build the path)
// Global     → res (maximum path found so far)