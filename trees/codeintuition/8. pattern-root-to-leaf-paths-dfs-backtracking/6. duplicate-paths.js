function solve(root) {
  if (!root) return 0;

  let count = 0;

  const seen = new Set();

  function dfs(node) {
    if (!node) return 0;

    // Check if this value already exists on the current root-to-node path
    const isDuplicate = seen.has(node.val);

    if (isDuplicate) {
      // This node has a duplicate ancestor — count it
      count++;
    } else {
      // First time seeing this value on this path — mark it
      seen.add(node.val);
    }

    dfs(node.left);
    dfs(node.right);

    if (!isDuplicate) {
      // Backtrack: only remove if we were the one who added it
      seen.delete(node.val);
    }
  }

  dfs(root);

  return count;
}

// The key insight: seen represents the current root-to-node path. When you backtrack, you only undo YOUR own changes — never someone else's. That's the golden rule of backtracking with a shared state.

// Backtracking golden rule:
//   You added it → you remove it
//   You didn't add it → you don't remove it

// This applies to Sets, Maps, Arrays — any shared state!

// 🎯 PATTERN CHECK
// 5-Word Test: "I need all ancestor values which come from parent above"
// → Preorder Stateful (pass SET down) + global count
// → Backtrack: delete when leaving, only if YOU added it
