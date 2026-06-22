// TC - O(n^2)
// SC - O(n)

var isBalanced = function (root) {
  // if my current node is not given that means I will be returning the false
  if (!root) return true;

  // if I do have only 1 node then I will return the true because it will be balanced
  if (!root.left && !root.right) return true;

  // if my current node has left and right then I will get their height and check the absolute height difference
  let left = height(root.left);
  let right = height(root.right);

  const diff = Math.abs(left - right);

  // if for the current node the left and right height abs diff is greater then 1 then I will return false
  if (diff > 1) return false;

  // otheriwse return true
  return isBalanced(root.left) && isBalanced(root.right);
};

function height(node) {
  if (!node) return 0;

  return 1 + Math.max(height(node.left), height(node.right));
}

// OPTIMAL - // TC - O(n)
// SC - O(1)

var isBalanced = function (root) {
  return checkHeight(root) !== -1;
};

function checkHeight(node) {
  if (!node) return 0;

  let left = checkHeight(node.left);
  let right = checkHeight(node.right);

  // if left or right is already unbalanced, propagate -1 upward
  if (left === -1 || right === -1) return -1;

  // if current node is unbalanced, return -1
  if (Math.abs(left - right) > 1) return -1;

  // otherwise return height
  return 1 + Math.max(left, right);
}
