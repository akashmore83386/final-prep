//kth smallest element
// we use the MaxHeap
// [3, 2, 4, 6, 9], k = 2

// [3, 2] -> [3, 2]
// [3, 2] -> [3, 2]
// [3, 2] -> [3, 2]
// [3, 2] -> [3, 2]

// So our final answer is 3


import { MaxHeap } from "../../SIMILAR-PRACTICE/1. max-heap.js";

function kthSmallest(nums, k) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < nums.length; i++) {
    maxHeap.insert(nums[i]);

    if (maxHeap.size() > k) {
      maxHeap.extractMax();
    }
  }

  return maxHeap.getMax();
}

console.log(kthSmallest([5, 4, 2, 8], 2))