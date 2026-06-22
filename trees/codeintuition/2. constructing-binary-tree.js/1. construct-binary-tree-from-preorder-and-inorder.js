// If we are provided the preorder sequence, by using that information, we know that first element will be the root of tree but we don't know what will be the root node for the left subtree, there's confusion. SO by using the preorder sequence we cannot form the whole tree, because we simply don't know where the other elements will go, will they go to left or right? We don't know.

// IF we are provided the inorder sequence, then we cannot form the tree because we don't know where is our root node located. Constructing a tree just by looking at its inorder traversal sequence is impossible. This is because, unlike preorder and postorder traversal sequences, we cannot look at the inorder traversal sequence and find the root node. The root node can be anywhere in the sequence.

// if we are provided the postorder sequence, then we cannot form the tree because, we know that the last element in the postorder sequence will be our root, but we can't say that the second last element will be the root of the left subtree or the root of the right subtree. SO again using only the postorder traversal we cannot form the tree.

// So we can not form the tree if we are provided the single sequences like inorder, preorder or the postorder.

// ---------

// If given both the preorder and inorder traversal sequence of a binary tree, we can construct the tree. We use both sequences in tandem to construct the tree and resolve any ambiguity incrementally.

// We follow a very simple idea to construct the binary tree from a given preorder and inorder traversal.

// Step 1: We know the first element in the preorder traversal sequence is the root node, so we use it to construct the `root` node.
// Step 2: Find the location of the `root` node in the inorder traversal sequence.
// Step 3: If the `root` node in the inorder traversal sequence has elements to its left, it indicates the presence of a `left` subtree. In this case, the next element in the preorder sequence is the `left` child, which is a clear and straightforward condition.
// Step 4: If the `root` node in the inorder traversal sequence does not have elements to its left but elements to its right, the root node does not have a left subtree, so the next element in the preorder sequence is the `right` child.
// Step 5: If the `root` node in the inorder traversal sequence does not have elements to its left and right, we are done creating the tree.

function solve(preorder, inorder) {
  // base case: if there are no elements, there's no tree to build
  if (preorder.length === 0) return null;

  // preorder[0] is ALWAYS the root of the current tree/subtree
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  // find root in inorder array — everything LEFT of mid is left subtree
  // everything RIGHT of mid is right subtree
  const mid = inorder.indexOf(rootVal);

  // split inorder into left and right subtrees
  const leftInOrder = inorder.slice(0, mid); // left subtree elements
  const rightInOrder = inorder.slice(mid + 1); // right subtree elements

  // split preorder into left and right subtrees
  // left subtree has exactly 'mid' elements (same size as leftInOrder), what does that mean -
  // preorder = [3, 9, 20, 15, 7]
  // inorder  = [9, 3, 15, 20, 7]

  // Root = 3
  // Find 3 in inorder → it's at index 1

  // So mid = 1

  // This means:
  //   - There is 1 element BEFORE 3 in inorder → [9]
  //   - That means LEFT subtree has exactly 1 node!
  const leftPreOrder = preorder.slice(1, mid + 1); // skip root, take mid elements
  const rightPreOrder = preorder.slice(mid + 1); // remaining elements

  // recursively build left and right subtrees
  // each call gets its own preorder + inorder slice
  root.left = solve(leftPreOrder, leftInOrder);
  root.right = solve(rightPreOrder, rightInOrder);

  // return the constructed root to parent
  return root;
}

// Simple way to remember:

// We split inorder → to know the SIZE of left and right subtrees
// We split preorder → to give each subtree its own "who is root?" information

  // preorder = [3, 9, 20, 15, 7]
  // inorder  = [9, 3, 15, 20, 7]

      //   3
      // 9   20
      //   15   7