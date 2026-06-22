// SIMILAR LEETCODE PROBLEM - // [images/5. evaluate-expression-tree_2026-04-19-12-11-13.png]
function evaluateExpressionTree(root) {
  // if the root is not given return the 0
  if (!root) return 0;

  // if the current node is leaf node then return its value
  if (!root.left && !root.right) return root.val;

  // if the current node has left and right then it will get the values
  let left = evaluateExpressionTree(root.left);
  let right = evaluateExpressionTree(root.right);

  // For the internal node, once we get the values of the left and right then calculate
  if (root.val === "+") return left + right;
  if (root.val === "-") return left - right;
  if (root.val === "*") return left * right;
  if (root.val === "/") return left / right;
}

//         +
//        / \
//       *   3
//      / \
//     2   4

// evaluateTree(2) → leaf → return 2
// evaluateTree(4) → leaf → return 4
// evaluateTree(*) → 2 * 4 → return 8
// evaluateTree(3) → leaf → return 3
// evaluateTree(+) → 8 + 3 → return 11