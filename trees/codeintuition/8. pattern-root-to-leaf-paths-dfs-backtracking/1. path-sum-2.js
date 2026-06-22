// The key insight CI is teaching:

// Root to Leaf problems do BOTH directions simultaneously — pass DOWN to build the path, return UP to combine results!

var pathSum = function (root, targetSum) {
  let result = [];
  let currentPath = [];

  function dfs(node, remainingSum) {
    // handle base case for the current node
    if (node === null) return;

    // for the current node/root node/parent node push that value in the currentPath
    currentPath.push(node.val);
    remainingSum = remainingSum - node.val;

    // we also need to check if our current node/parent node/root node is leaf node then what we need to do. When it is leaf node and also when our remaining sum is 0 that means we have found the one correct path, then we will push that path path in the result
    if (!node.left && !node.right && remainingSum === 0) {
      result.push([...currentPath]);
    }

    // Now do the same things for the rest of nodes recursively
    dfs(node.left, remainingSum);
    dfs(node.right, remainingSum);

    // backtrack — remove current node from path before returning to parent
    // this happens whether we found a valid path or not
    currentPath.pop();
  }

  dfs(root, targetSum);

  return result;
};