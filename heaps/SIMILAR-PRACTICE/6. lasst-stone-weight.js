/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new PriorityQueue((a, b) => b - a);

  // add every stone in the maxHeap
  for (let i = 0; i < stones.length; i++) {
    maxHeap.enqueue(stones[i]);
  }

  while (maxHeap.size() > 1) {
    const val1 = maxHeap.dequeue();
    const val2 = maxHeap.dequeue();

    if (val1 !== val2) {
      maxHeap.enqueue(val1 - val2);
    }
  }

  return maxHeap.size() === 0 ? 0 : maxHeap.front();
};

// 2, 7, 4, 1, 8, 1
// [8, 7, 4, 2, 1, 1]