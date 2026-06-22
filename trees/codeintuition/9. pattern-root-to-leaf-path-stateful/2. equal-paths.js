function solve(root) {
  if (!root) return [];

  let result = [];
  let currentPath = [];

  function dfs(node, evenCounts, oddCounts) {
    if (!node) return;

    if (node.val % 2 === 0) {
      evenCounts++;
    } else {
      oddCounts++;
    }

    // always add to path
    currentPath.push(node.val);

    if (!node.left && !node.right && evenCounts === oddCounts) {
      result.push([...currentPath]);
    }

    dfs(node.left, evenCounts, oddCounts);
    dfs(node.right, evenCounts, oddCounts);

    currentPath.pop();
  }

  dfs(root, 0, 0);
}

//     1
// 2       4

// [[1, 2], [1, 4]]

//     1
// 8       4
//     2       4

// [[1, 8]]

// Okay so from the root to leaf, we want equal number of even and odd counts in the path from root to leaf. SO that means in every path we want to have the count for the even counts and odd counts, then when we hit the leaf node we simply do evenCounts - oddCounts if that is not equal to 0 then we backtrack
