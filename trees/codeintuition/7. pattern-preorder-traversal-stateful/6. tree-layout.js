// Alright champ, let's break this down together.
// Good question! Let me analyze this carefully.
// Understanding the problem:
// Root at (r=0, c=0)
// Left child  → r+1, c+0  (one row below, same column)
// Right child → r+0, c+1  (same row, one column right)

// Find max number of nodes at same (r,c) coordinate
// Trace the example:
// Node 1 → (0,0)
// Node 2 → (1,0)  [left of 1]
// Node 3 → (0,1)  [right of 1]
// Node 4 → (2,0)  [left of 2]
// Node 5 → (2,1)  [right of 2]
// Node 6 → (1,2)  [right of 3... wait]

// Is it BFS?
// Not necessarily! Look at the rules:

// Left child → (r+1, c) — row increases
// Right child → (r, c+1) — col increases

// This is actually Preorder DFS passing (r, c) DOWN to children — classic Preorder Stateless pattern!
// 5-Word Test:
// "I need my (r,c) coordinates which come from my parent"
// → Preorder — pass (r,c) DOWN! ✅

function treeLayout(root) {
  const coordMap = new Map(); // "(r,c)" → count
  let maxStack = 1;

  function dfs(node, r, c) {
    if (!node) return;

    const key = `${r},${c}`;
    coordMap.set(key, (coordMap.get(key) || 0) + 1);
    maxStack = Math.max(maxStack, coordMap.get(key));

    dfs(node.left, r + 1, c); // left → row+1
    dfs(node.right, r, c + 1); // right → col+1
  }

  dfs(root, 0, 0);
  return maxStack;
}

// [images/6. tree-layout_2026-04-29-12-38-27.png]