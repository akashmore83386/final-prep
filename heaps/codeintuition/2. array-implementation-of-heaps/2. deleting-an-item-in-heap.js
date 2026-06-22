// The delete operation is another primary operation on a heap and is used to delete a given node (by address) from the tree. The implementation is encapsulated in the delete function, which deletes the given node in the binary tree and ensures the resulting tree still follows the max-heap property. Let us look at the algorithm and implementation of the delete operation on a max heap implemented as an array.

// Algorithm
// The algorithm for deleting a value in a heap is quite similar to insert. However, we cannot delete a non-leaf node, which would break the tree. To overcome this, we swap the value at the given node with the last node in the binary tree. Since the last node is a leaf node, we can easily delete it.

// Swapping the value from the last node to the given node might violate the heap property in the resulting tree, so we need to recalibrate it to enforce the heap property. To do this, we traverse downwards from the given node (that now has the swapped value) and, at each iteration, compare the current node with its children. If the larger child is greater than the parent, we swap them and continue traversal in that direction. The traversal stops when we reach a leaf node, or the current node is larger than both its children.

// This way, at the end of the delete operation, the resulting binary tree still follows the heap property and remains a heap.

// Algorithm

// Step 1: Swap the value at the given node with the last node in the tree.
// Step 2: Delete the last node.
// Step 3: Traverse downwards in the tree from the given node, moving the smaller value down to enforce the max heap property.

// Down Heapify
// The deletion algorithm updates the value of the root node of the heap and re-enforces the heap property going downwards from the root. This process is also sometimes called down-heapify and is generally applied in cases when the value of a node changes, which may cause the subtree rooted at that node to violate the heap property. Unlike up-heapify, down-heapify is applied when the nodes above the updated node still follow the heap property. Still, there may be a possibility that the nodes below it now violate the heap property, and so new information has to be propagated downwards.

// Implementation
// We perform bounds checks to ensure the given node exists in the heap. If the given node is within the segment in the array that holds the heap, we swap the value in the given node with the last node in the tree and then delete the last node. Next, we iteratively traverse the tree to move the smaller value downwards to re-enforce the heap property.

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
}

// Complexity analysis
// The delete operation swaps the values at two indices and decrements the size to perform a soft deletion, a constant-time operation. However, after that, it traverses the binary tree downwards. In the best case, the given node might be a leaf node, or the swapped value might be larger than the children of the given nodes. In any of these cases, we won't need to traverse downwards, so deletion would be a constant O(1) operation.

// In the worst case, however, the given node might be the root node, and the swapped value might be the smallest in the heap. In this case, we would have to traverse downwards from the root to a leaf node. Since the height of a complete binary tree is log(N), the time complexity in this case would be O(log(N)).

// To delete a value, we do not create any new data structure that depends on the size of stored data or input. We only create a fixed number of temporary variables, so the space complexity, in any case, is constant O(1).

// -----------------------------------------

// DELETE from MAX HEAP:

// Step 1 → swap root with LAST element (leaf)
//          → root goes to end, last comes to top

// Step 2 → remove last element (was root, now at end)
//          → array size shrinks by 1 ✅

// Step 3 → heapify DOWN from root
//          → new root might be small → push it down
//          → swap with LARGER child until heap property restored