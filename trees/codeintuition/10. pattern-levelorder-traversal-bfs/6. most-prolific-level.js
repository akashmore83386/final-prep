function solve(root) {
  if (!root) return 0;

  let queue = [root];
  let maxProlificness = -1; // Initialize with a value lower than any possible ratio
  let resultLevel = 0;
  let currentLevel = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;

    // 1. Process the current level and fill the queue with the NEXT level
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    // 2. At this point, levelSize is the count of nodes in the level we just finished.
    // queue.length is the count of nodes in the level immediately below it.
    const nextLevelNodes = queue.length;
    const prolificness = nextLevelNodes / levelSize;

    // 3. Update the tracker if this level is more prolific than previous ones
    if (prolificness > maxProlificness) {
      maxProlificness = prolificness;
      resultLevel = currentLevel;
    }

    currentLevel++;
  }

  return resultLevel;
}

// Complexity:

// Time: O(n) — every node visited once
// Space: O(n) — queue holds at most one full level at a time