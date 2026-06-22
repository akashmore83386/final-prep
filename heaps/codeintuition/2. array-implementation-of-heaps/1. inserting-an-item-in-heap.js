// The insert operation is a primary operation on a heap used to insert a value. The implementation is encapsulated in the insert function, which inserts a new node in the binary tree and ensures the resulting tree still follows the max-heap property. Let us look at the algorithm and implementation of the insert operation on a max heap implemented as an array.

// Algorithm
// The algorithm for inserting a new value in a heap is quite simple. Since the heap is a complete binary tree, we insert a new node at the first available free spot. When implemented in an array, this free spot is the index after the last element of the heap in the array.

// The newly inserted node might violate the heap property in the resulting tree, so we recalibrate the tree to enforce the heap property. To do this, we traverse upwards from the newly inserted node and compare the current node with its parent at each iteration. If the value at the child node is larger than the parent, we swap the nodes. The traversal stops when we reach the root node, or the current node is no longer larger than its parent.

// This way, at the end of the insert operation, the resulting binary tree still follows the heap property and remains a heap.

// Insert a new node (18) in the given max heap

// Algorithm

// Step 1: Insert the new element at the end of the array
// Step 2: Traverse upwards in the tree from the node, moving the larger value up to enforce max heap property.
// Up Heapify
// The insertion algorithm inserts a new node at the end of the heap and re-enforces the heap property going upwards from that node. This process is also sometimes called up-heapify. It is generally applied when a new node is inserted, or the value of a node changes, and the subtree rooted at the new/updated node still follows the heap property. There may be a possibility that nodes above it may now violate the heap property, and so this information has to be propagated upwards.

// new node
// affected nodes
// The up heapify operation

// Implementation
// The array implementation uses a fixed-sized array, so we perform capacity checks before inserting the new node into the tree. If there is enough room to add a new node, we add it at the end and iteratively traverse up the tree to move the larger value upwards to re-enforce the heap property.

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

  insert(val) {
    // Insert the new value at the end of the heap
    this.heap.push(val);

    // Restore the max heap property by comparing with parent nodes
    this.upHeapify(this.heap.length - 1);
  }
}

// Complexity analysis
// The insert operation updates the value at an index in the internal array, a constant-time operation. However, after that, it traverses the binary tree upwards. In the best case, the newly inserted node might have a value smaller than its parent, so we won't need to traverse upwards, and the best-case time complexity would be constant O(1).

// In the worst case, however, the newly created node might have the largest value in the tree, so we would have to traverse upwards to the root node. Since the height of a complete binary tree is log(N), the time complexity in this case would be O(log(N)).

// ------------------------------------------------

// MAX HEAP INSERT — step by step:

// 1. Add new element at the END of array (last position)
//    → maintains CBT property ✅

// 2. Compare with parent:
//    → new value > parent → SWAP (heapify up) ✅
//    → new value <= parent → STOP ✅

// 3. Keep going until:
//    → parent is larger, OR
//    → we reach the root (index 0)

const check = new MaxHeap();

check.insert(10);
check.insert(14);
check.insert(8);
check.insert(101);

console.log(check);

//     104
//   14    8
// 10

// Remember - In the minHeap, we only have to change the comparison operator in this - 


// From 

// while (index > 0 && this.heap[parent] < this.heap[index]) {

// To

// while (index > 0 && this.heap[parent] > this.heap[index]) {
