export class MinHeap {
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

  getMin() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let parent = this.getParent(index);
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(index, parent);
      index = parent;
      parent = this.getParent(index);
    }
  }

  extractMin() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0]; // Renamed from 'max'
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(index) {
    let smallest = index; // Renamed from 'largest'
    const left = this.getLeft(index);
    const right = this.getRight(index);

    if (left < this.size() && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.size() && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

// Time complexities - // [images/2. min-heap_2026-06-22-23-07-30.png]