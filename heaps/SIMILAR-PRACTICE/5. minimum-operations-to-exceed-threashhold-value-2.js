import { MinHeap } from "./2. min-heap.js";
function minimumOperationsToExceedThreshholdValue2(nums, k) {
  // we need the minHeap to store all our nums elements
  const minHeap = new MinHeap();

  // store all the elements in the meanHeap
  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
  }

  let operations = 0;

  // we need to loop over the heap, until the values are lesser than threshhold k
  while (minHeap.getMin() < k) {
    // we then extract first 2 min values from our heap
    const val1 = minHeap.extractMin();
    const val2 = minHeap.extractMin();

    // we apply math operation on those 2 values
    const newValue = Math.min(val1, val2) * 2 + Math.max(val1, val2);

    // once we applied the operation then we push back it in the minHeap
    minHeap.insert(newValue);

    // we increase the counter of operations
    operations++;
  }

  return operations;
}

console.log(minimumOperationsToExceedThreshholdValue2([2, 11, 10, 1, 3], 10));