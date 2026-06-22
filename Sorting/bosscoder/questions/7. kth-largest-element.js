// brute force - TC - O(n log n), SC - O(1)
function solve(arr, k) {
  arr.sort((a, b) => a - b);

  return arr[arr.length - k];
}

console.log(solve([3, 2, 1, 5, 6, 4], 2));

// [6, 5, 4, 3, 2, 1]
// arr[k - 1] = arr[2 - 1] = arr[1] = 5

// can we do better than this?
// We can use the min heap of size k, there TC will be - O(n log k) and SC will be - O(k)

class MinHeap {
  constructor() {
    this.data = [];
  }

  // Get parent and child indices
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // Swap two elements
  swap(i1, i2) {
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }

  // Insert a value and heapify up
  push(val) {
    this.data.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.data.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.data[parentIndex] <= this.data[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Remove and return the minimum value (root)
  pop() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const root = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown();
    return root;
  }

  heapifyDown() {
    let index = 0;
    const length = this.data.length;

    while (this.getLeftChildIndex(index) < length) {
      let smallestChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < length &&
        this.data[rightChildIndex] < this.data[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (this.data[index] <= this.data[smallestChildIndex]) break;

      this.swap(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }

  // Helper to peek at the minimum value
  peek() {
    return this.data.length > 0 ? this.data[0] : null;
  }

  size() {
    return this.data.length;
  }
}

// --- The Solution ---
function solve2(arr, k) {
  const minHeap = new MinHeap();

  for (let num of arr) {
    minHeap.push(num);

    // If the heap exceeds size k, pop the smallest element
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  // The root of the min-heap is now the Kth largest element
  return minHeap.peek();
}

console.log(solve2([3, 2, 1, 5, 6, 4], 2)); // Output: 5

// Optimal solution - O(n) average time complexity

// Algorithm - quickselect

