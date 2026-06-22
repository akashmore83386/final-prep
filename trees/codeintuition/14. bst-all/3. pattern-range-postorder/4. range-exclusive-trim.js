// Given the root of a binary search tree and two values, low and high, write a function to trim this binary search tree so that it only contains nodes whose values lie in the inclusive range of [low, high].

// The relative structure of the remaining nodes must be preserved. If an ancestor and one of its descendants both stay in the trimmed tree, the ancestor-descendant relationship between them is kept intact.

// [2, 5]

//         4                        4
//     2       5       ->       2       5
//  1     3        6              3

// --------------------------------------------------------------

// [6, 9]

//     5
// 1       8          ->             8
//       6   9                     6    9

// 🤔 In previous problems, dfs returned a NUMBER (sum, height, count). What should dfs return HERE to actually restructure the tree?

// Hint: Look at Example 2 — node 8 becomes the new root. How does that happen? The parent must receive something from its child to rewire the tree.

// And think about this case:
// If node.val < low:
// - node itself is removed
// - node's LEFT subtree is definitely out of range
// - but node's RIGHT subtree might have valid nodes!
// - so what do you return to the parent?

// node.val < low  → return dfs(node.right)  // right might have valid nodes
// node.val > high → return dfs(node.left)   // left might have valid nodes

// And for an in-range node — you don't remove it, but you need to rewire its children because its children might be out of range!
// So:
// node is in range:
//     node.left  = dfs(node.left)   // rewire left
//     node.right = dfs(node.right)  // rewire right
//     return node                    // keep this node!
// And null:
// null → return null

// Notice how this is slightly different from previous problems:
// Previous problemsThis problemdfs returns a numberdfs returns a nodeUpdates node.valUpdates node.left and node.rightAggregates valuesRewires tree structure

// Now go write the full code! You have everything you need 💪
// This is also a real LeetCode problem — LC 669 Trim a BST 😄

function solve(root, low, high) {
  if (!root) return null;

  function dfs(node) {
    if (!node) return null;

    // conditions if the node is out of ranges
    if (node.val < low) return dfs(node.right);
    if (node.val > high) return dfs(node.left);

    // if the node is in the range then
    node.left = dfs(node.left);
    node.right = dfs(node.right);

    return node;
  }

  return dfs(root);
}

// Tree: [5,1,8,null,null,6,9], low=6, high=9

// dfs(5): 5 < low → return dfs(8)
// dfs(8): in range!
//     node.left  = dfs(6) → 6 in range, leaf → return node 6 ✅
//     node.right = dfs(9) → 9 in range, leaf → return node 9 ✅
//     return node 8

// New root = 8 ✅

// Output: [8, 6, 9] ✅

// Range skipping:
//   node < low  → dfs(node.right)
//   node > high → dfs(node.left)

// Return type changes per problem:
//   Range Sum      → number (sum)
//   Range Diameter → number (height)
//   Range Leaves   → number (count)
//   Range Trim     → node (restructure)