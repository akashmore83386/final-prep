var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null;

  // root is LAST element of postorder
  const rootVal = postorder[postorder.length - 1];
  const root = new TreeNode(rootVal);

  const mid = inorder.indexOf(rootVal);

  // split inorder (same as LC 105!)
  const leftInOrder = inorder.slice(0, mid);
  const rightInOrder = inorder.slice(mid + 1);

  // split postorder (different from LC 105!)
  const leftPostOrder = postorder.slice(0, mid);
  const rightPostOrder = postorder.slice(mid, postorder.length - 1);

  root.left = buildTree(leftInOrder, leftPostOrder);
  root.right = buildTree(rightInOrder, rightPostOrder);

  return root;
};

