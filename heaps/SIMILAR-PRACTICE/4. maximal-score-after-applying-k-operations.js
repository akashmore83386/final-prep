import { MaxHeap } from "./1. max-heap.js";

function maximalScoreAfterApplyingKOperations(nums, k) {
  // we need the maxHeap to store all the elements
  const maxHeap = new MaxHeap();

  // we need to push elements in maxHeap
  for (let i = 0; i < nums.length; i++) {
    maxHeap.insert(nums[i]);
  }

  let score = 0;

  // we have k chances
  for (let i = 0; i < k; i++) {
    // extract max and add that in the score and then add ceil operation on extractMax after that math operation push back in the maxHeap
    const removed = maxHeap.extractMax();
    score += removed;
    const newValue = Math.ceil(removed / 3);
    maxHeap.insert(newValue);
  }

  return score;
}

console.log(maximalScoreAfterApplyingKOperations([1, 10, 3, 3, 3], 3));