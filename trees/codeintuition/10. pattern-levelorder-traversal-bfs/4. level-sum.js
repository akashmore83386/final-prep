function solve(root) {
  if (!root) return [];
  let queue = [root];

  let res = [];

  while (queue.length) {
    let levelSize = queue.length;
    let levelNodes = [];

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      levelNodes.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    let sum = 0;

    for (let i = 0; i < levelNodes.length; i++) {
      sum += levelNodes[i];
    }

    res.push(sum);
  }

  return res;
}