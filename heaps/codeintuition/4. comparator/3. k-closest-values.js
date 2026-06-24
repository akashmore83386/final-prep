// we are given a nums of integers and a target and k. We have to return the k closest values to target from our nums

// [6, 7, 3, 1], k = 2, target = 3
// output - [3, 1]

const {
  PriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

function kClosestValues(root, k, target) {
  // Max-Heap: We want the node with the MAXIMUM distance at the root.
  // Pair structure: [nodeValue, distance from target]
  // comparator compares distance - places largest distance at top
  const maxHeap = new PriorityQueue((a, b) => b[1] - a[1]);

  // Helper function to traverse the tree (Any traversal works for the heap approach)
  function dfs(node) {
    if (!node) return;

    const distance = Math.abs(node.val - target);
    maxHeap.enqueue([node.val, distance]);

    // If our heap exceeds size k, the root contains the element
    // FURTHEST from the target among our current choices. Drop it!
    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }

    // continue traversing the rest of the tree
    dfs(node.left);
    dfs(node.right);
  }
  
  dfs(root);

  const result = [];

  while (!maxHeap.isEmpty()) {
    result.push(maxHeap.dequeue()[0]); // [0] gets the node.val
  }

  return result;
}