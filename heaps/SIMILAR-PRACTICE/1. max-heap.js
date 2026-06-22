export class MaxHeap {
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

  getMax() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }

  insert(value) {
    // your pseudo code here!
    this.heap.push(value);

    // heapifyUP
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    // your pseudo code here!
    let parent = this.getParent(index);

    while (index > 0 && this.heap[parent] < this.heap[index]) {
      this.swap(index, parent);
      index = parent;
      parent = this.getParent(index);
    }
  }

  // --- NEW METHODS ---

  // it's going to return root, the old root, also it is going to delete that old root and keep the max heap property 
  extractMax() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop(); // Only one element left

    const max = this.heap[0]; // Store the max value to return later
    this.heap[0] = this.heap.pop(); // Move the very last element to the root
    this.heapifyDown(0); // Restore the heap property starting from the root

    return max;
  }

  heapifyDown(index) {
    let largest = index;
    const left = this.getLeft(index);
    const right = this.getRight(index);

    // Check if left child exists and is greater than the current largest
    if (left < this.size() && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    // Check if right child exists and is greater than the current largest
    if (right < this.size() && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // If the largest is not the current node, swap and continue heapifying down
    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  remove(index) {
    // Replace the value at the given index with the value at the
    // last node, then heapify
    this.heap[index] = this.heap.pop();

    // Restore the max heap property
    this.heapifyDown(index);
  }
}