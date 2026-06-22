// A perfect binary tree is one where:

// Every internal node has exactly 2 children
// ALL leaf nodes are at the SAME level

// Perfect ✅         Not Perfect ❌
//         1                1
//        / \              / \
//       2   3            2   3
//      / \ / \          / \
//     4  5 6  7        4   5

function perfectBinaryTreeCheck(root) {
  // in case of empty tree we return true
  if (!root) return true;

  // if the current node is the leaf then return true
  if (!root.left && !root.right) return true;

  // for any other node
  if (!root.left || !root.right) return false;

  // we need to also check the left and right subtree's heigh, if they are equal, because the question is expecting to have the same levels
  if (height(root.left) !== height(root.right)) return false;

  return (
    perfectBinaryTreeCheck(root.left) && perfectBinaryTreeCheck(root.right)
  );
}

function height(root) {
  if (!root) return 0;

  return 1 + Math.max(height(root.left), height(root.right));
}

// "Perfect BT = Full BT + all leaves at same level"
// Checking height(left) === height(right) at every node guarantees same level leaves!