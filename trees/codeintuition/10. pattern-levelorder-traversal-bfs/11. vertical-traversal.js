function verticalTraversal(root) {
  if (!root) return [];

  const queue = [[root, 0]];
  const colMap = new Map();

  while (queue.length) {
    const [node, col] = queue.shift();

    // store ALL nodes at this column
    if (!colMap.has(col)) colMap.set(col, []);
    colMap.get(col).push(node.val); // push ALL nodes!

    if (node.left) queue.push([node.left, col - 1]);
    if (node.right) queue.push([node.right, col + 1]);
  }

  return [...colMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([col, vals]) => vals);
}

// ⏱️ COMPLEXITY

// Time: O(n log n) — BFS + sort
// Space: O(n) — map + queue

// REMEMBER -

// Top View        → store FIRST node per column
// Bottom View     → store LAST node per column
// Vertical        → store ALL nodes per column