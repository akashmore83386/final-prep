// ✅ EXACTLY RIGHT!
// And WHY is it child → parent?
// Because to know the height of a node, you need to know the heights of its left and right subtrees FIRST. Children compute their heights and RETURN them up to the parent.

// leaf node returns 1
//   → its parent gets 1 from both sides
//   → parent returns 1 + max(1,1) = 2
//   → grandparent gets 2
//   → and so on UP to the root

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// See how naturally you applied child → parent? Children return their heights, parent adds 1 and returns upward. That's the pattern! 💪

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack