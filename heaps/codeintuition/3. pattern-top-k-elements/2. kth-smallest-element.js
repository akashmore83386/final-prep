//kth smallest element
// we use the MaxHeap
// [3, 2, 4, 6, 9], k = 2

// [3, 2] -> [3, 2]
// [3, 2] -> [3, 2]
// [3, 2] -> [3, 2]
// [3, 2] -> [3, 2]

// So our final answer is 3


// import { MaxHeap } from "../../SIMILAR-PRACTICE/1. max-heap.js";

const { PriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function kthSmallest(nums, k) {
  const maxHeap = new MaxPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    maxHeap.enqueue(nums[i]);

    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }
  }

  return maxHeap.front();
}

console.log(kthSmallest([5, 4, 2, 8], 2))