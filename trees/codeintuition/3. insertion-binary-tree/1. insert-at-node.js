function solve(root, data) {
  // Create a new node with the given data value
  const newRoot = new TreeNode(data);

  // Set the current root as the left child of the new node
  newRoot.left = root;

  // Return the new root
  return newRoot;
}

// Worst Case

// Space Complexity - O(1) 
// Time Complexity - O(1)