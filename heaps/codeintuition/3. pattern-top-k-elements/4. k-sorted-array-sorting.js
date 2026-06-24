// we are given an unsorted array and a k, in our array every element is at most k positions away from it's target position when sorted. Write a function that sorts this array in O(n log k).

// arr = [6, 5, 3, 2, 8, 10, 9], k = 3
// output - [2, 3, 5, 6, 8, 9, 10]

// We can easily sort this array by using sort, but that will be O(n log n)

// How can we solve this in O(n log k), which means we need to use Heaps somehow here.

// Approach - Each element is at most K positions away from its target
// arr[0] = 6 -> |6 - 3| = 3 <= k
// arr[1] = 5 -> |5 - 3| = 2 <= k
// arr[2] = 3 -> |3 - 3| = 0 <= k
// arr[3] = 2 -> |2 - 3| = 1 <= k
// arr[4] = 8 -> |8 - 3| = 5 > k
// arr[5] = 10 -> |10 - 3| = 7 > k
// arr[6] = 9 -> |9 - 3| = 6 > k

// Why does this constraint help us?

// Think about this:
// If every element is at most K positions away...
// Then the MINIMUM element of the entire array
// MUST be somewhere in the first K+1 elements!

// arr = [6, 5, 3, 2, 8, 10, 9], k=3
// First k+1=4 elements: [6, 5, 3, 2]
// Minimum = 2 (2 is indeed in first 4 elements!)

// -------------------------------------------------------------

// So what if you maintained a MIN HEAP of size K+1?

// Window of k+1 elements → always contains the next minimum!

// Step 1: Build min heap of first k+1 elements
// Step 2: Extract min → place at index 0
// Step 3: Add next element → extract min → place at index 1
// ...keep going!

// Why is this O(n log k)?
// n elements processed
// each heap operation = O(log k) (heap size stays k+1)
// Total = O(n log k)

// import { MinHeap } from "../../SIMILAR-PRACTICE/2. min-heap.js";
const {
  PriorityQueue,
  MinPriorityQueue,
} = require("@datastructures-js/priority-queue");

function kSortedArray(arr, k) {
  const minHeap = new MinPriorityQueue();

  // build initial heap of size k + 1
  for (let i = 0; i < k + 1; i++) {
    // O(log k + 1)
    minHeap.enqueue(arr[i]); // O(log k)
  } // O(k log k)

  // after building the initial heap:
  // heap contains first k + 1 elements
  // now for each remaining element:
  // extract min -> place it at correct position in arr
  // enqueue next element into heap

  for (let i = k + 1; i < arr.length; i++) {
    // O(n)
    arr[i - k - 1] = minHeap.dequeue(); // place min at correct position
    minHeap.enqueue(arr[i]); // O(log k)
  } // O(n log k)

  // empty remaining heap elements
  // empty remaining heap elements
  let outputIndex = arr.length - k - 1;
  while (!minHeap.isEmpty()) {
    arr[outputIndex] = minHeap.dequeue();
    outputIndex++;
  }

  return arr;
}

console.log(kSortedArray([6, 5, 3, 2, 8, 10, 9], 3));

// Time:  O(k log k) build heap + O(n log k) main loop
//        = O(n log k) overall

// Space: O(k) → heap only stores k+1 elements

// -------------------------------------------------------

// 🧠 K Sorted Array — The 3 Steps
// arr = [6, 5, 3, 2, 8, 10, 9], k=3

// Step 1 — Build initial window:
// "The minimum element of the whole array
//  MUST be somewhere in the first k+1 elements"

// First k+1=4 elements: [6, 5, 3, 2]
// → Put them in a MIN heap
// → Smallest is always at root!

// heap = [2, 3, 5, 6]

// Step 2 — Slide the window:
// For every NEW element that comes in:
// → Extract min from heap → place it in arr
// → Insert new element into heap

// Like a conveyor belt:
// → one comes out → one goes in
// → heap size stays k+1 always!

// Step 3 — Drain remaining:
// No more new elements?
// → Just keep extracting min until heap is empty
// → Place each one in arr sequentially

// These are the LAST k+1 elements!

// 🎯 One Line Summary
// MinHeap of size k+1 = sliding window
// that always gives you the next minimum! 💡

// ⏱️ Complexity
// Time:  O(n log k) ← heap size is k not n!
// Space: O(k)       ← heap only holds k+1 elements