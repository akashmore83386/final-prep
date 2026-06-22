var widthOfBinaryTree = function (root) {
  if (!root) return 0;

  // store [node, index] pairs in queue
  // root starts at index 0
  const queue = [[root, 0]];
  let maxWidth = 0;

  while (queue.length) {
    const levelSize = queue.length;

    // peek at first index of this level for normalization
    const firstIdx = queue[0][1];

    let firstIndex, lastIndex;

    for (let i = 0; i < levelSize; i++) {
      const [node, index] = queue.shift();

      // normalize to prevent overflow
      // subtract firstIdx from every index at this level
      const normalizedIndex = index - firstIdx;

      // track first and last index of this level
      if (i === 0) firstIndex = normalizedIndex;
      if (i === levelSize - 1) lastIndex = normalizedIndex;

      // push children with their calculated indices
      if (node.left) queue.push([node.left, 2 * normalizedIndex]);
      if (node.right) queue.push([node.right, 2 * normalizedIndex + 1]);
    }

    // width = last index - first index + 1
    const width = lastIndex - firstIndex + 1;
    maxWidth = Math.max(maxWidth, width);
  }

  return maxWidth;
};