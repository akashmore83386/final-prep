// So the pattern is clear now:
// Every node gets a range (min, max)
// - Root starts with (-Infinity, +Infinity)
// - Go LEFT  → max becomes current node's value
// - Go RIGHT → min becomes current node's value
// - If node's value is outside its range → invalid BST!

// Look at this tree, starting at root 5:
//         5
//        / \
//       1   8
// When you go LEFT to node 1:
// You know node 1 must be less than 5 (that's the BST rule).
// So the maximum allowed value becomes 5.
// Range for node 1 = (-∞, 5)

// When you go RIGHT to node 8:
// You know node 8 must be greater than 5.
// So the minimum allowed value becomes 5.
// Range for node 8 = (5, +∞)

// Now node 8 has children:
//         8
//        / \
//       6   9
// When you go LEFT from 8 to node 6:
// Node 6 must be less than 8 → max becomes 8.
// But also must be greater than 5 (inherited from above) → min stays 5.
// Range for node 6 = (5, 8) ← exactly what you said earlier! ✅

function isValidBST(root) {
  return validate(root, -Infinity, +Infinity);
}

function validate(node, min, max) {
  // base case?
  if (!node) return true;
  // check if node.val is within (min, max)
  if (node.val <= min || node.val >= max) return false; // out of range
  // recurse left and right with updated ranges
  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack

// 🔑 KEY INSIGHT

// "Don't just check immediate parent. Every node has a valid RANGE inherited from ALL ancestors. Pass min/max down through recursion!"

// This is the trick that catches everyone in interviews! 💪
