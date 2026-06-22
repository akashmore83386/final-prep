// Given the root of a binary search tree, write a function that replaces each node's value with 0 if its successor's value is a multiple of its own.

// What is a "successor" in a BST?
// The successor of a node = the next larger element in the BST.
// From Example 1, inorder gives: 1, 2, 4, 6, 5, 10
// So:
// Node 1 → successor is 2  → 2 % 1 = 0 ✅ → replace 1 with 0
// Node 2 → successor is 4  → 4 % 2 = 0 ✅ → replace 2 with 0
// Node 4 → successor is 6  → 6 % 4 ≠ 0 ❌ → keep 4
// Node 6 → successor is 5  → 5 % 6 ≠ 0 ❌ → keep 6
// Node 5 → successor is 10 → 10 % 5 = 0 ✅ → replace 5 with 0
// Output: [6, 0, 0, 0, 4, null, 10] ✅

//         6                            6
//     2       5         ->         0       0
// 1       4       10             0    4        10

// Okay so the inorder traversal will be like this because we are using the BST property, [1, 2, 4, 6, 5, 10]. Now inside that I can see that successor element if it is multiple of current node that current node's value should be the node.val = 0

// reverse inorder = [10, 5, 6, 4, 2, 1]

// What if I use the inorder traversal?
// ---> here's the tricky part — think carefully:
// In normal inorder (Left → Root → Right), when you're sitting at node 1, have you visited node 2 (its successor) yet or not yet?
// Inorder visits: 1 → 2 → 4 → 6 ...
//                 ↑
//            at node 1,
//         successor 2 not visited yet!
// So you can't compare with successor because you haven't seen it yet. 🤔

// 🤔 What if you flip the traversal — reverse inorder (Right → Root → Left)? Now when you're sitting at node 2, which node have you ALREADY visited?

// Reverse inorder visits: ... → 4 → 2 → 1
//                                    ↑
//                               at node 2,
//                           you already visited 4!
// See the pattern? 👀
// In reverse inorder, the previously visited node is always the successor!

// SO we need to carry the previous node's value

function solve(root) {
  if (!root) return null;

  let prevValue = null; // previus value is successor here

  function dfs(node) {
    if (!node) return;

    dfs(node.right);

    let original = node.val;

    if (prevValue !== null && prevValue % node.val === 0) {
      node.val = 0;
    }
    prevValue = original;

    dfs(node.left);
  }

  dfs(root);

  return root;
}

// same skeleton again — reverse inorder, carry a variable, compare/update each node. This is literally the same pattern 4 problems in a row now