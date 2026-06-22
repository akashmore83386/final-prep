// The extract operation extracts the maximum value from a max heap. Unlike the peek operation, it also deletes the node with the maximum value from the heap. The implementation is encapsulated in the extract function that deletes the root node in the binary tree and returns its value while ensuring that the resulting binary tree is still a heap. Let us look at the algorithm and implementation of the extract operation on a max heap implemented as an array.

// Algorithm
// The algorithm for extracting the maximum value in a max-heap is very simple. It combines peek and delete operations. We copy the value at the tree's root node to return it later and then delete the root node using the delete operation. The delete operation ensures that the resulting binary tree still follows the heap property and remains a heap.

// Algorithm

// Step 1: Copy the value of the root node in the given reference
// Step 2: Delete the root node
// Implementation
// We perform size checks to ensure the root node exists in the heap. If the heap has a non-zero number of data items, we copy the value at the root and delete it using the delete function implemented earlier.

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
        if (
            left < this.heap.length &&
            this.heap[left] > this.heap[largest]
        ) {
            largest = left;
        }

        // Find the largest among the node and its right child
        if (
            right < this.heap.length &&
            this.heap[right] > this.heap[largest]
        ) {
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

    extractMax() {
        if (this.heap.length === 0) return -1;

        // Extract the root node
        let root = this.heap[0];

        // Delete the root node
        this.remove(0);

        // Return the extracted root node
        return root;
    }
}


// Complexity analysis
// The extract operation is just a combination of peek and delete operations. The peek operation has a constant time complexity in any case. So, the best and worst-case time complexity for the extract operation will be determined by the delete operation. Since we always delete the root node, which is the worst case for the delete operation, the extract operation in any case has a time complexity of O(log(N)).

