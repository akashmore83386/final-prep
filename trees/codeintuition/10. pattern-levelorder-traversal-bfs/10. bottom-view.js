function solve(root) {
  if (!root) return [];

  const queue = [[root, 0]];

  const colMap = new Map();

  while (queue.length) {
    const [node, col] = queue.shift();

    // store last node at this column, node.val overrite each time so at last we get the last node value
    colMap.set(col, node.val);

    // push left child with col-1
    if (node.left) queue.push([node.left, col - 1]);

    // push right child with col+1
    if (node.right) queue.push([node.right, col + 1]);
  }

  return [...colMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([col, val]) => val);
}