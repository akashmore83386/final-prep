// This is actually neither UP nor DOWN — it's just "do something at each node, recurse both sides". It's postorder because you visit children after swapping

var invertTree = function (root) {
  if (!root) return null;

  // swap left and right
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // recurse into both subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};