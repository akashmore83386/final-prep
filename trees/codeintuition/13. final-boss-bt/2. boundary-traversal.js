// This is a mixed traversal problem — one of the trickiest! Let me make sure you understand it first.
// Boundary = 3 parts combined:
//         1          ← ROOT (always included)
//        / \
//       2   3        ← LEFT boundary (going down left side)
//      /     \
//     4       7      ← LEAVES (bottom, left to right)

// Right boundary = going UP right side (REVERSED!)

// So:
// Part 1: Root → [1]
// Part 2: Left boundary (top to bottom, excluding leaf) → [2]
// Part 3: Leaves left to right → [4, 7]
// Part 4: Right boundary (bottom to top, excluding leaf) → [3]

// Final: [1, 2, 4, 7, 3] ✅

// So the 3 functions are:
// 1. leftBoundary(node)  → preorder, go left first, exclude leaf
// 2. collectLeaves(node) → DFS, collect only leaf nodes
// 3. rightBoundary(node) → postorder, go right first, exclude leaf

function boundary(root) {
  if (!root) return [];

  // 🔧 THE FIX: if root itself is a leaf, just return it — no boundary traversal needed
  // Without this, collectLeaves(root) would add root again → duplicate!
  if (!root.left && !root.right) return [root.val];

  let result = [root.val]; // always include root

  let left = [];
  let leaves = [];
  let right = [];

  // Part 1: Left boundary (top to bottom, excluding leaf)
  // Preorder — push first, recurse after
  // Prefer left child, fall to right if no left
  function uptodownPreorder(node) {
    if (!node) return;
    if (!node.left && !node.right) return; // stop at leaf

    left.push(node.val);

    if (node.left) uptodownPreorder(node.left);
    else uptodownPreorder(node.right);
  }

  // Part 2: All leaves left to right
  // Simple DFS — only collect when both children are null
  function collectLeaves(node) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaves.push(node.val);
      return;
    }
    collectLeaves(node.left);
    collectLeaves(node.right);
  }

  // Part 3: Right boundary (bottom to top, excluding leaf)
  // Postorder — recurse first, push after (gives us bottom-to-top order)
  // Prefer right child, fall to left if no right
  function downtoupPostorder(node) {
    if (!node) return;
    if (!node.left && !node.right) return; // stop at leaf

    if (node.right) downtoupPostorder(node.right);
    else downtoupPostorder(node.left);

    right.push(node.val); // push AFTER recursion = bottom to top
  }

  uptodownPreorder(root.left); // left boundary starts at root's left child
  collectLeaves(root); // all leaves including under both sides
  downtoupPostorder(root.right); // right boundary starts at root's right child

  return [...result, ...left, ...leaves, ...right];
}

// Boundary Traversal — The Core Idea
// Boundary = 3 parts stitched together:
//         1          ← Root (always first)
//        / \
//       2   3        ← Left boundary goes DOWN | Right boundary comes UP
//      /     \
//     4       7      ← Leaves go left → right
// 3 functions, 3 directions:
// PartDirectionTrickLeft boundaryTop → Down (preorder)Prefer left, fall to rightLeavesLeft → Right (DFS)Only collect when no childrenRight boundaryBottom → Up (postorder)Prefer right, fall to left — recurse FIRST, push AFTER

// 3 rules to never forget:

// Skip leaves in left/right boundary — leaves are collected separately
// Right boundary is postorder — recurse first, push after = automatic reversal
// Root-is-leaf edge case — if root has no children, just return [root.val]

// Call order:
// javascriptuptodownPreorder(root.left)   // left boundary
// collectLeaves(root)            // all leaves
// downtoupPostorder(root.right)  // right boundary
// That's the whole problem. Pattern + 3 functions + 1 edge case. 🎯