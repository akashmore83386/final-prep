import { MaxHeap } from "./1. max-heap.js";

function removeStonesToMinimizeTotal(stones, k) {
  // create maxHeap to store all the stones
  const maxHeap = new MaxHeap();

  // insert all the elements in the maxHeap
  for (let i = 0; i < stones.length; i++) {
    maxHeap.insert(stones[i]);
  }

  // now we have k chances
  for (let i = 0; i < k; i++) {
    // extract max, do floor(max / 2) operation and push it back in maxHeap
    const removed = maxHeap.extractMax();

    const newValue = removed - Math.floor(removed / 2);

    maxHeap.insert(newValue);
  }

  // now we have the maxHeap with new values, now we return all the stones
  let allStones = 0;

  while (!maxHeap.isEmpty()) {
    allStones += maxHeap.extractMax();
  }

  return allStones;
}

console.log(removeStonesToMinimizeTotal([5, 4, 9], 2));