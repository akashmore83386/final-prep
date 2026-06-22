// Preorder traversal is a fundamental technique for exploring the nodes of a binary tree. In this method, each node is processed in a specific sequence: first, the root node is visited, followed by the left subtree, and then the right subtree.

// In what scenarios is preorder traversal useful?
// Preorder traversal is particularly useful in scenarios where the root node's information must be accessed before inspecting any child node, such as in prefix notation expressions or tree serializations.

// Algorithm
// Preorder traversal of a binary tree is a three-step process. First, we visit the node, followed by the left and right subtree. Let's look at an example to understand it better.

//         1
//     2       3
//   4   5   6   7

// root - left - right
// preorder = [1, 2, 4, 5, 3, 6, 7]

function solve(root) {
  const array = [];

  function traverse(node) {
    if (node === null) return;

    array.push(node.val);

    traverse(node.left);

    traverse(node.right);
  }

  traverse(root);

  return array;
}

// We visit every node at once in the traversal, so the TC should be linear
// The algorithm's SC is O(h), because we have the h height of the tree. Maximum depth of the recursive calls is equal to the height of the tree