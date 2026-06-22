// Perfect — this image is a crystal-clear visual example of the exact problem we just discussed:
// "Given the root of a binary tree, update each node's value to its depth."
// The image shows before → after transformation.
// Left side: Original tree (with arbitrary node values)

//           1
//        /     \
//       2       3
//      /       /
//     4       7

// Root value = 1
// Level-1 nodes = 2 and 3
// Level-2 nodes = 4 and 7

// (The orange arrows highlight the left-child edges, green arrows highlight the right-child edges — just for visual clarity in the drawing.)
// Right side: After the update (what the function should return)

//           0
//        /     \
//       1       1
//      /       /
//     2       2

// Every node’s value is now replaced by its depth (distance from root).
// Root → depth 0
// Both children of root → depth 1
// Both grandchildren → depth 2

// The tree structure (who is left/right child of whom) remains exactly the same. Only the .val of every node changes.

function solve(root) {
  if (!root) return 0;

  function dfs(node, depth) {
    if (!node) return 0;

    node.val = depth;

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return root;
}

// Complexity:

// Time: O(n) — we visit every node exactly once
// Space: O(h) — recursion stack goes as deep as the tree height. Worst case O(n) for a skewed tree, O(log n) for balanced