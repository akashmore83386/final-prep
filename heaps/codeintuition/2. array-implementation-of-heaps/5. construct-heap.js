export class MaxHeap {
  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Helper function to maintain the max heap property downwards
  downHeapify(arr, n, index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    // Find the largest among the node and its left child
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // Find the largest among the node and its right child
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If the largest is not the current node, swap and continue heapify
    if (largest !== index) {
      this.swap(arr, index, largest);
      this.downHeapify(arr, n, largest);
    }
  }

  construct(arr) {
    const n = arr.length;

    // Start from the last non-leaf node and perform max-heapify
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.downHeapify(arr, n, i);
    }
  }
}