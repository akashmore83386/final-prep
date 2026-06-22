function randomLowestCommonAncestor(root, nodes) {
  // base case: null node — nothing to search here
  if (!root) return null;

  // if current node is one of our targets — return it immediately
  // any matching descendant will be covered by this node
  if (nodes.includes(root)) return root;

  // recurse left and right first (postorder!)
  let leftLCA = randomLowestCommonAncestor(root.left, nodes);
  let rightLCA = randomLowestCommonAncestor(root.right, nodes);

  // both sides found something → current node is the LCA
  if (leftLCA && rightLCA) return root;

  // only one side found something → bubble it up
  return leftLCA || rightLCA;
}