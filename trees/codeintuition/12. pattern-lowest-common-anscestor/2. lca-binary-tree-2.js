// Given the root of a binary tree and two random nodes, nodeA and nodeB, write a function to find and return the node that is the lowest common ancestor of nodeA and nodeB. If either nodeA or node B does not exist in the tree, return null.

// The lowest common ancestor is defined between two nodes, nodeA and nodeB, as the lowest node in the tree that has both nodeA and nodeB as descendants (where we allow a node to be a descendant of itself).

// Input: nodeA = 2, nodeB = 9
// Tree:
//         1
//        / \
//       8   4
//          / \
//         2   7

function solve(root, nodeA, nodeB) {
  let count = 0;

  function dfs(node) {
    // base case: null node
    if (!node) return null;

    // recurse left and right FIRST (postorder!)
    let leftLCA = dfs(node.left);
    let rightLCA = dfs(node.right);

    // THEN check if current node is a target
    // increment count and return current node
    if (node === nodeA) count++;
    if (node === nodeB) count++;

    // only return THIS node if it IS a target
    if (node === nodeA || node === nodeB) return node;

    // if both sides found something → current node is LCA
    if (leftLCA && rightLCA) return node;

    // return whichever side found something
    return leftLCA || rightLCA;
  }

  let result = dfs(root);

  // only return result if BOTH nodes were actually found
  return count === 2 ? result : null;
}

// [images/2. lca-binary-tree-2_2026-04-30-15-30-35.png]
