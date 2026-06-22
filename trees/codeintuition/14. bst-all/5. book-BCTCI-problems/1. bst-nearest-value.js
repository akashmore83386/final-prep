// If target=7 and node=5, target is bigger so go right!
// And if target=3 and node=5, go left.

// For example:
// BST:        5
//            / \
//           3   8
//          / \
//         2   4

// target = 6

// At node 5: |5-6|=1 → closest=5, go right (6>5)
// At node 8: |8-6|=2 → closest stays 5, go left (6<8)
// At null:   stop!

// Answer = 5 ✅

function solve(root, target) {
  if (!root) return null;
  let closest = root.val;
  let node = root;

  while (node) {
    if (Math.abs(node.val - target) < Math.abs(closest - target)) {
      closest = node.val;
    }
    if (target < node.val) node = node.left;
    else node = node.right;
  }

  return closest;
}