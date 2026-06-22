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
  const minHeap = new MinHeapByFreq();

  // Step 3: Process each unique element
  for (const [value, freq] of freqMap) {
    // Store [freq, value] pair — compare by freq!
    minHeap.insert([freq, value]);

    // If heap exceeds k → remove LEAST frequent
    // (root of min heap = smallest frequency)
    if (minHeap.size() > k) {
      minHeap.extractMin();
    }
  }

  // Step 4: Extract all remaining elements
  // These are our k most frequent!
  const result = [];
  while (!minHeap.isEmpty()) {
    result.push(minHeap.extractMin()[1]); // [1] = value not freq
  }

  return result;
}

// MinHeap that compares by FREQUENCY (pair[0])
// Only change from regular MinHeap = comparison uses pair[0]!
class MinHeapByFreq {
  constructor() {
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i) {
    return 2 * i + 1;
  }
  getRight(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }

  insert(pair) {
    this.heap.push(pair);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let parent = this.getParent(index);
    // 🔑 KEY CHANGE: compare pair[0] (frequency) not raw value!
    // smaller frequency → bubble up (min heap)
    while (index > 0 && this.heap[parent][0] > this.heap[index][0]) {
      this.swap(index, parent);
      index = parent;
      parent = this.getParent(index);
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(index) {
    let smallest = index;
    const left = this.getLeft(index);
    const right = this.getRight(index);

    // 🔑 KEY CHANGE: compare pair[0] (frequency) not raw value!
    if (left < this.size() && this.heap[left][0] < this.heap[smallest][0]) {
      smallest = left;
    }
    if (right < this.size() && this.heap[right][0] < this.heap[smallest][0]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

console.log(kMostFrequent([1, 2, 2, 3, 3, 3], 2)); // [3, 2]
console.log(kMostFrequent([1, 5, 6, 6], 1)); // [6]

// Time:  O(n) freqMap + O(n log k) heap = O(n log k)
// Space: O(n) freqMap + O(k) heap = O(n)