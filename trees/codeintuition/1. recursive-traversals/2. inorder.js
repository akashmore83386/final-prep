// Inorder traversal is another fundamental technique for exploring the nodes of a binary tree. In this method, each node is processed in the given sequence: first, the left subtree is visited, then the root node, and finally, the right subtree.

// In what scenarios is inorder traversal useful?
// Inorder traversal is particularly valuable when dealing with binary search trees (BSTs). It accesses the nodes in ascending order, making it an essential method for sorting and validating the BST property.
// Algorithm
// Inorder traversal of a binary tree is a three-step process. First, the left subtree is visited, then the root node, and finally, the right subtree Let's look at an example to understand it better.

//         1
//     2       3
//   4   5   6   7

// left - root - right

// inorder = [4, 2, 5, 1, 6, 3, 7]

function solve(root) {
  const array = [];

  function traverse(node) {
    if (node === null) return;

    traverse(root.left);

    array.push(node.val);

    traverse(root.right);
  }

  traverse(root);

  return array;
}

// Like preorder traversal, we visit every node only once in the traversal, so the time complexity is always linear.

// The algorithm's space complexity is always O(h), where h is the tree's height. This is because the recursive calls add to the call stack, and the maximum depth of the recursive calls is equal to the tree's height. The best case occurs when the tree is balanced, where the height is logN. However, the worst case occurs when the tree is skewed, resulting in an O(N) space complexity.