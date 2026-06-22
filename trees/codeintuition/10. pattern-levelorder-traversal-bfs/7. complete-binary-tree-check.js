// Hint: Think about BFS level by level. In a complete binary tree, once you see a node with a missing child, all subsequent nodes must be leaf nodes (no children at all).
// So the approach is:
// Use BFS. Keep a flag: "foundNull = false"

// At each node:
//   If we already found a null AND current node has children → NOT complete!
//   If current node has a missing child → set foundNull = true
//   Add children to queue normally

function solve(root) {
  if (!root) return true;

  let queue = [root];
  let seenNull = false;

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (current === null) {
        seenNull = true;
        continue;
      }

      if (seenNull) return false;

      queue.push(current.left);
      queue.push(current.right);
    }
  }

  return true;
}

// Okay so does that mean, gap at the start count as not CBT, gap at the middle count as the no CBT, but gap at the last, that means last node missing then it is CBT?