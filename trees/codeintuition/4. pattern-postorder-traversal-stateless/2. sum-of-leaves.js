function sumOfLeaves(root) {
  if (!root) return 0;

  // leaf case
  if (!root.left && !root.right) return root.val;

  // for any other node, which is not leaf
  let left = sumOfLeaves(root.left);
  let right = sumOfLeaves(root.right);

  // return the sum of left leaf + right leaf
  return left + right;
}