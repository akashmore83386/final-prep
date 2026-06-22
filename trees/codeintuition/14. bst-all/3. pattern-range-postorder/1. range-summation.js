// Given the root of a binary search tree and a range represented by low and high, write a function to update each node within this range by adding to it the values of all its in-range descendants. The node's own original value is preserved.

// It is guaranteed that if a node's value is outside [low, high], all nodes in its left and right subtrees are also out of range.

// Input: root = [4, 2, 5, 1, 3, null, 6], low = 2, high = 5
// Output: [14, 5, 5, 1, 3, null, 6]
// Explanation: The updated tree is shown in the diagram above.

// Input: root = [5, 1, 8, null, null, 6, 9], low = 6, high = 9
// Output: [5, 1, 23, null, null, 6, 9]
// Explanation: The updated tree is shown in the diagram above.

// THAT means I am given a range [x, y] and in that range I have to check all the descendant node's and sum them and also add to the current node's value

// range = [2, 5]
//       4                         14
//   2       5         ->       5      5
// 1   3        6            1     3      6

// Now I want you to think about this:

// 🤔 When I'm sitting at node 4, I need the sum of all in-range nodes from its LEFT subtree AND RIGHT subtree. Which traversal processes children BEFORE the parent?

// 1. node < low  → skip left subtree, only go RIGHT
// 2. node > high → skip right subtree, only go LEFT
// 3. node in range → go BOTH sides (postorder), then update node

function solve(root, low, high) {
  function dfs(node) {
    if (!node) return 0; // return 0 as default sum

    if (node.val < low) {
      // your code
      return dfs(node.right);
    }

    if (node.val > high) {
      // your code
      return dfs(node.left);
    }

    // node is in range - postorder!
    let left = dfs(node.left);
    let right = dfs(node.right);

    // update node and return something to parent
    node.val = node.val + left + right;

    return node.val;
    // your code
  }

  dfs(root);
  return root;
}

// Similar Leetcode question
// var rangeSumBST = function (root, low, high) {
//     function dfs(node) {
//         if (!node) return 0; // return 0 as default sum

//         if (node.val < low) {
//             // your code
//             return dfs(node.right);
//         }

//         if (node.val > high) {
//             // your code
//             return dfs(node.left);
//         }

//         // node is in range - postorder!
//         let left = dfs(node.left);
//         let right = dfs(node.right);

//         return node.val + left + right
//         // your code
//     }

//     return dfs(root);
// };