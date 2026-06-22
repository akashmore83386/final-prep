// Zigzag = BFS + boolean flag + reverse every other level. Same skeleton, tiny twist!
// Time: O(n) — every node visited exactly once
// Space: O(n) — queue holds at most one full level

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  let leftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const levelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      levelNodes.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    leftToRight ? result.push(levelNodes) : result.push(levelNodes.reverse());

    leftToRight = !leftToRight;
  }

  return result;
};