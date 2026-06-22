// This question is similar to the right side view question, in this question I just swapped, the order of lines, so that now we are first visiting the left node

// DFS solution - preorder stateful
function solve(root) {
  if (!root) return [];

  let res = [];

  function dfs(node, depth) {
    if (!node) return;

    if (depth === res.length) {
      res.push(node.val);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);

  return res;
}

// BFS solution
// function leftSideViewBinaryTree(root) {
//   if (!root) return [];

//   const queue = [[root, 0]];

//   let res = [root.val];

//   let currentDepth = 0;

//   while (queue.length) {
//     const [node, depth] = queue.shift();

//     if (!node) continue;

//     if (depth === currentDepth + 1) {
//       res.push(node.val);
//       currentDepth = currentDepth + 1;
//     }

//     if (node.left) queue.push([node.left, depth + 1]);
//     if (node.right) queue.push([node.right, depth + 1]);
//   }

//   return res;
// }