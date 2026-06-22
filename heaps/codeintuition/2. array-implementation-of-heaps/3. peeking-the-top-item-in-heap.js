// The peek operation gets the maximum value from a max heap. The implementation is encapsulated in the peek function that returns the value stored at the root node of the binary tree. Let us look at the algorithm and implementation of the peek operation on a max heap implemented as an array.

// Algorithm
// The algorithm for getting the maximum value in a max-heap is very simple. We return the value stored at the root node of the tree. Since we do not modify the tree, the resulting binary tree still follows the heap property and remains a heap.

// Algorithm

// Step 1: Return the value stored in the root node of the tree.

// Implementation
// We perform size checks to ensure the root node exists in the heap. If the heap has a non-zero number of data items, we return the value at the root.

export class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Helper function to restore heap property upwards (used in insert)
  upHeapify(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      this.swap(index, parent);
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // Helper function to maintain the max heap property downwards
  downHeapify(index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    // Find the largest among the node and its left child
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    // Find the largest among the node and its right child
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // If the largest is not the current node, swap and continue
    // heapify
    if (largest !== index) {
      this.swap(index, largest);
      this.downHeapify(largest);
    }
  }

  insert(val) {
    // Insert the new value at the end of the heap
    this.heap.push(val);

    // Restore the max heap property by comparing with parent nodes
    this.upHeapify(this.heap.length - 1);
  }

  remove(index) {
    // Replace the value at the given index with the value at the
    // last node, then heapify
    this.heap[index] = this.heap.pop();

    // Restore the max heap property
    this.downHeapify(index);
  }

  getMax() {
    return this.heap.length === 0 ? -1 : this.heap[0];
  }
}

// Complexity analysis
// The peek operation only copies the value at the root node, so the best and worst-case time complexity is constant O(1).

// We do not create any new data structure that depends on the size of stored data or input and only create a fixed number of temporary variables, so the space complexity is constant O(1) in any case.
