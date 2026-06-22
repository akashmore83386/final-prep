// Take these numbers from the BST: 1, 2, 3, 4, 5, 6
// Now sort them descending (largest to smallest):
// 6, 5, 4, 3, 2, 1
// Now assign ranks:
// 6 → rank 1  (biggest, so rank 1)
// 5 → rank 2
// 4 → rank 3
// 3 → rank 4
// 2 → rank 5
// 1 → rank 6  (smallest, so last rank)

// Now the task is simple:
// Go to each node in the BST and replace its value with its rank.
// So node that had value 6 → now becomes 1
// Node that had value 4 → now becomes 3
// Node that had value 1 → now becomes 6
// Before:           After:
//       4                 3
//      / \               / \
//     2   5             5   2
//    / \    \          / \    \
//   1   3    6        6   4    1
// Same tree structure — just values replaced with ranks!

function solve(root) {
  // if not root then return null
  if (!root) return 0;

  let count = 0;

  function dfs(node) {
    if (!node) return null;
    // right side
    dfs(node.right);

    // at the root node, increase the count++
    count++;

    node.val = count;

    // left side
    dfs(node.left);
  }

  dfs(root);

  return root;
}

// Why count - When we visit the first node (largest), we need to know "this is rank 1".
// When we visit the second node, we need to know "this is rank 2".
// How does the code know which rank to assign at each node?
// That's exactly what count is doing! Every time you visit a node:
// count++ → gives you the current rank
// node.val = count → assigns that rank to the node
// Without count, what would you assign to node.val? 😄

// Think of it like giving out ticket numbers at a counter. The first person gets ticket 1, second gets ticket 2... count is just the ticket counter! 🎫