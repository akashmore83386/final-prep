// Given an array arr and a positive integer k, write a function to find and return the kth largest element in this array.

// You must use a heap to solve this problem.
// Example 1
// Input: arr = [5, 4, 2, 8], k = 2
// Output: 5
// Explanation: 5 is the 2nd largest element in the array.

// Approach -

// Finding K LARGEST? → Use MIN heap of size K
// Finding K SMALLEST? → Use MAX heap of size K

// nums = [3, 1, 5, 2, 4], k = 3
// → 3rd largest = 3
// Maintain a MIN heap of size K:
// Process 3: heap = [3]
// Process 1: heap = [1, 3]
// Process 5: heap = [1, 3, 5]  ← size = k, stop adding freely!

// Process 2: 2 < heap root(1)? NO → skip
// Process 4: 4 > heap root(1)? YES → remove 1, add 4
//            heap = [3, 4, 5]

// Answer = heap root = 3 ✅

// Min heap of size K = "keep only the K largest seen so far"
// Root = Kth largest (smallest of the K largest) 🎯

// The Algorithm
// Initialize an empty Min-Heap.

// Iterate through each number in the array arr:

// Add the current number to the Min-Heap.

// If the size of the Min-Heap exceeds k, remove the top element (the smallest one currently in the heap).

// Once the loop finishes, the top element of the Min-Heap is your answer.

// import { MinHeap } from "../../SIMILAR-PRACTICE/2. min-heap.js";

const { PriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kthLargest(nums, k) {
  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    // TC - Loop runs exactly n times!
    minHeap.enqueue(nums[i]); // TC - inserting in the heap depends on the current size of heap, so it will be O(log k) not O(log n)!

    if (minHeap.size() > k) {
      minHeap.dequeue(); // TC - Similarly, extracting the minimum element takes logarithmic time relative to the heap's current size. So it will be O(log k) not O(log n)!
    }
  }

  return minHeap.front(); // O(1)
}

console.log(kthLargest([5, 4, 2, 8], 2));

// TC - Loop O(n), inside loop insert and extractMin both takes O(log k) so total TC is - O(n log k)
// SC - Heap only store k elements - O(k)

// kth largest element
// We use the MinHeap
// [3, 2, 4, 6, 9], k = 2

// [3, 2] -> [2, 3]
// [4, 3] -> [3, 4]
// [6, 4] -> [4, 6]
// [9, 6] -> [6, 9]

// So final answer is 6