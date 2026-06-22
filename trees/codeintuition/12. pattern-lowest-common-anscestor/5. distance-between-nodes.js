//     1
//    / \
//   2   3
//  /     \
// 4        7

// valA = 4, valB = 7, answer = 4 edges.
// The path is: 4 → 2 → 1 → 3 → 7

// EXACTLY! 🎯 The LCA is the meeting point!
// So the path from 4 to 7 is actually:
// 4 → 2 → 1 → 3 → 7
// Which is really two separate paths:

// 4 to LCA (1) = 2 edges
// 7 to LCA (1) = 2 edges
// Total = 4 edges ✅

// So the formula is:

// Distance = distance(nodeA to LCA) + distance(nodeB to LCA)

// Approach -

// Find the LCA of valA and valB → use LCA 1!
// Find depth of valA from LCA
// Find depth of valB from LCA
// Add them up!

function distanceBetweenNodes(root, valA, valB) {
  // Step 1: find the LCA of valA and valB
  let lca = findLCA(root, valA, valB);

  // Step 2: find distance from LCA to each node
  // and add them up
  return findDepth(lca, valA, 0) + findDepth(lca, valB, 0);
}

// finds the LCA of two nodes — same as LCA 1!
function findLCA(node, valA, valB) {
  // base case: null node
  if (!node) return null;

  // base case: found one of our targets
  if (node.val === valA || node.val === valB) return node;

  // recurse left and right
  let leftLCA = findLCA(node.left, valA, valB);
  let rightLCA = findLCA(node.right, valA, valB);

  // both sides found something → current node is LCA
  if (leftLCA && rightLCA) return node;

  // bubble up whichever side found something
  return leftLCA || rightLCA;
}

// finds distance from 'node' down to the node with value 'val'
function findDepth(node, val, depth) {
  // node not found
  if (!node) return -1;

  // found it! return current depth
  if (node.val === val) return depth;

  // search left and right
  let left = findDepth(node.left, val, depth + 1);
  let right = findDepth(node.right, val, depth + 1);

  // return whichever side found it
  return left !== -1 ? left : right;
}

// COMPLEXITY
// Time: O(N) — O(N) for LCA + O(N) for each depth search = O(N)
// Space: O(N) — recursion stack in worst case