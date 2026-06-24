const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

function kMostFrequent(arr, k) {
  // Step 1: Build frequency map
  // {1→1, 2→2, 3→3}
  const freqMap = new Map();
  for (const item of arr) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
  }

  // Step 2: Use MIN heap of size k
  // WHY MIN heap? Same as Kth Largest!
  // → keep k LARGEST frequencies
  // → root = smallest frequency among top k
  // → easy to kick out least frequent!
  const minHeap = new PriorityQueue((a, b) => a[1] - b[1]);

  // Step 3: Process each unique element
  for (const [value, freq] of freqMap) {
    // Store [freq, value] pair — compare by freq!
    minHeap.enqueue([value, freq]);

    // If heap exceeds k → remove LEAST frequent
    // (root of min heap = smallest frequency)
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  // Step 4: Extract all remaining elements
  // These are our k most frequent!
  const result = [];
  while (!minHeap.isEmpty()) {
    result.push(minHeap.dequeue()[0]); // [0] = value not freq
  }

  return result;
}

console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2)); // [2, 1]
console.log(kMostFrequent([1, 5, 6, 6], 1)); // [6]

// Time:  O(n) freqMap + O(n log k) heap = O(n log k)
// Space: O(n) freqMap + O(k) heap = O(n)