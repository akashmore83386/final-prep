// we need to return the maximum sum after k negations, that means we have to return the maximum sum after flipping integer sign, we have only k attempts to do so

// [4,2,3], k = 1, we need the maximum sum so if we select the smaller number then flip it's sign and we have only 1 attempt so we can select 2 from array, and flip it's sign, so it becomes, then total sum will be  4 + (-2) + 3 = 5 will be answer

// [3,-1,0,2], k = 3, smaller is -1, we make it 1, then smaller is 0, we make it -0 it remains 0, then we can again select the same number 0 and make it 0, our k limit ended, now we have total sum 1 + 0 + 2 + 3 = 6

// That means we can select same number for negation

// Approach - We need to maximize the sum after k attempts to flip sign of numbers, we know that we need minumum element to flip it's sign, so we will need smaller number everytime, one by one so we can flip their sign, for smaller number continuouly we can use the MinHeap, we can store all the elements in minHeap, it will give the minimum at top. Once we have access for the smallest element then we extract it from top and negative it's sign and then push back to same heap, minHeap will reorder itself.

// at last we can just return the sum of the heap elements, which will be the final answer

import { MinHeap } from "../SIMILAR-PRACTICE/2. min-heap.js";

function maximizeSumAfterKNegations(nums, k) {
  // initialise the minHeap
  const minHeap = new MinHeap();

  // push all the elements in the minHeap
  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
  }

  // k chances, this loop runs k times
  for (let i = 0; i < k; i++) {
    // extract minimum
    let flipped = minHeap.extractMin();

    // flip it's sign by multiplying -1
    flipped = flipped * -1;

    // push back the element in minHeap
    minHeap.insert(flipped);
  }

  // final sum answer
  let sum = 0;

  // we need to extract min until the minHeap is not empty
  while (!minHeap.isEmpty()) {
    sum += minHeap.extractMin();
  }

  return sum;
}

console.log(maximizeSumAfterKNegations([4, 2, 3], 1));

// TC - O(n log n)
// SC - O(n)