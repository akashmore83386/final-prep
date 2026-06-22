// PERFECT ANALOGY! Palindrome on trees — I love it!
// So symmetric tree = mirror image of itself!
// Now one question before coding —
// Look at these two nodes that need to be compared:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// When checking if left subtree mirrors right subtree:

// Node 2 (left) mirrors Node 2 (right)
// Node 3 (left-left) mirrors Node 3 (right-right)
// Node 4 (left-right) mirrors Node 4 (right-left)

// ----

// isMirror(left, right):
//   left.left  vs right.right  ← outer pair
//   left.right vs right.left   ← inner pair

function isSymmetric(root) {
  return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  // If both trees are empty, they are considered mirror images
  if (!left && !right) return true;

  // If only one tree is empty, they are not mirror images
  if (!left || !right) return false;

  // If the values of the current nodes are different, they are not
  // mirror images
  if (left.val !== right.val) return false;

  // Recursively check if the left subtree of the left tree is the
  // mirror image of the right subtree of the right tree and vice
  // versa
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

// "Symmetric tree = left subtree mirrors right subtree. Outer pairs and inner pairs must match recursively!"

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack