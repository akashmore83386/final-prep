// BFS + grab the last node of each level = right side view. Simple
// TC - O(n), SC - O(n)
function solve(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const levelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      levelNodes.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    result.push(levelNodes[levelNodes.length - 1]);
  }

  return result;
}