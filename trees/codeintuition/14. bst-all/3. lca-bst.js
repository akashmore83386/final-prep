// At every node:

// Case 1: both p and q < current  → go LEFT
// Case 2: both p and q > current  → go RIGHT
// Case 3: they're on opposite sides (or one equals current) → current IS the LCA! Return it!

// BST's sorted property means you never need to search blindly. At every node, you KNOW which direction the answer lives

// Time: O(h) — h is height of tree. NOT O(n)! We're not visiting every node — we're making smart decisions at each step. O(log n) for balanced BST, O(n) for skewed.
// Space: O(h) — recursion stack depth

function lowestCommonAncestorBST(root, p, q) {
  if (!root) return null;

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestorBST(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestorBST(root.right, p, q);
  } else {
    return root;
  }
}
