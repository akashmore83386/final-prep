// k range sum
// [4, 2, 5, 1, 3, 6], k1 = 4, k2 = 5

// We first need to get values of getKthLargest(4) and getKthSmallest(5) from our already build methods

// Then in the main method, loop over entire nums array and then get the total sum

// Avoid mistake - The problem is not asking the sum between the elements, it i asking the sum of elements which fall into this [rangeStart, rangeEnd] range

import { MaxHeap } from "../../SIMILAR-PRACTICE/1. max-heap.js";
import { MinHeap } from "../../SIMILAR-PRACTICE/2. min-heap.js";

function kRangeSum(nums, k1, k2) {
  const val1 = KthLargest(nums, k1); // 3
  const val2 = KthSmallest(nums, k2); // 5

  const lowerBound = Math.min(val1, val2)
  const upperBound = Math.max(val1, val2)

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= lowerBound && nums[i] <= upperBound) {
      sum += nums[i];
    }
  }

  return sum;
}

function KthLargest(nums, k) {
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);

    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  return minHeap.getMin();
}

function KthSmallest(nums, k) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < nums.length; i++) {
    maxHeap.insert(nums[i]);

    if (maxHeap.size() > k) {
      maxHeap.extractMax();
    }
  }

  return maxHeap.getMax();
}

console.log(kRangeSum([4, 7, 2, 12, 5], 2, 3));