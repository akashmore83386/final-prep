// This is the Top View problem! Let me make sure you understand it first.
// Looking at a tree FROM THE TOP — you only see nodes that are NOT blocked by another node above them in the same column.
// Think of it like standing directly above the tree and looking down — some nodes are hidden behind others!

// Key insight — columns:

//         1          ← column 0
//        / \
//       2   3        ← column -1, column +1
//      / \    \
//     4   5    7     ← column -2, col 0, col +2

// For each column — you only see the TOP-MOST node (closest to root)!

// So the approach:

// BFS + track column for each node
// → store [node, col] in queue
// → left child  → col - 1
// → right child → col + 1
// → For each column → first node seen = top view node
// → Use a Map: {col → first node value seen}
// → Sort by column at the end → return values

function solve(root) {
  if (!root) return [];

  const queue = [[root, 0]];

  const colMap = new Map();

  while (queue.length) {
    const [node, col] = queue.shift();

    // store first node at this column
    if (!colMap.has(col)) {
      colMap.set(col, node.val);
    }

    // push left child with col-1
    if (node.left) queue.push([node.left, col - 1]);

    // push right child with col+1
    if (node.right) queue.push([node.right, col + 1]);
  }

  return [...colMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([col, val]) => val);
}

// ⏱️ COMPLEXITY

// Time: O(n log n) — O(n) BFS + O(n log n) sort
// Space: O(n) — queue + map

// 🔑 KEY INSIGHT

// "BFS visits top nodes first — so the FIRST node we see at any column = top view automatically! No depth tracking needed!"