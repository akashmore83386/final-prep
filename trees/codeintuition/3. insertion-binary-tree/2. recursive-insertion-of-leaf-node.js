// A new node can be easily inserted in the binary tree as a leaf node by recursively going down the tree from top to bottom. The insert process can be summarised in three simple steps, which are given below.

// Step 1: Traverse the tree and find the first node that does not have a `left` or `right` subtree.
// Step 2: Create a new node with the given data and link it to the node found in step 1.

// Algorithm
// To insert a new node as a leaf node, we first need to decide which node in the given tree would be the parent of the newly inserted node. To do this, we have to traverse the tree and identify the first node that does not have either a left child, a right child, or both. This node can act as the parent of our newly inserted node. We can use any traversal algorithms we have learned so far to find this node.

// In this example, we will traverse the tree in one direction. This will allow us to reach a leaf node or a node with a free left or right spot.

// What traversal algorithm should be used?
// The goal is to insert a new node as a leaf in the tree so we can use any tree traversal algorithm. We only need to reach a node that does not have either a left or right child, and then we can insert our new node as its child, making it a leaf node.

function solve(root, data) {
  let newNode = new TreeNode(data);

  // Helper function that returns true as soon as insertion is done
  function dfs(node) {
    if (!node) return false; // base case - shouldn't reach here normally

    // Step 1: Try left child first (this is what "first available spot" usually means)
    if (node.left === null) {
      node.left = newNode;
      return true; // inserted! stop everything
    }

    // Step 2: If left is taken, try right child
    if (node.right === null) {
      node.right = newNode;
      return true; // inserted! stop everything
    }

    // Step 3: Both children exist → go deeper (left subtree first, then right)
    // Only continue if we haven't inserted yet
    if (dfs(node.left)) {
      return true;
    }
    if (dfs(node.right)) {
      return true;
    }

    return false; // no spot found in this subtree
  }

  // Handle empty tree case (root is null)
  if (!root) {
    return newNode;
  }

  // Start the search from root
  dfs(root);

  // Return the root (tree is modified in-place)
  return root;
}

// Worst Case - Unbalanced tree skewed in the direction of traversal

// Space Complexity - O(N)
// Time Complexity - O(N)