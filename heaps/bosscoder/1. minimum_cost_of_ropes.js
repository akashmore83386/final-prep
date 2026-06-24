// Given an array, arr[] of rope lengths, connect all ropes into a single rope with the minimum total cost. The cost to connect two ropes is the sum of their lengths.

// Examples:

// Input: arr[] = [4, 3, 2, 6]
// Output: 29
// Explanation: First connect 2 and 3 to get [4, 5, 6] with a cost of 5, then connect 4 and 5 to get [9, 6] with a cost of 9, and finally connect 9 and 6 to get one rope with a cost of 15, giving a total minimum cost of 29. Any other order, such as connecting 4 and 6 first, results in a higher total cost of 38.
// Input: arr[] = [4, 2, 7, 6, 9]
// Output: 62
// Explanation: First, connect ropes 4 and 2, which makes the array [6, 7, 6, 9]. Cost of this operation 4 + 2 = 6. Next, add ropes 6 and 6, which results in [12, 7, 9]. Cost of this operation 6 + 6 = 12. Then, add 7 and 9, which makes the array [12,16]. Cost of this operation 7 + 9 = 16. And finally, add these two which gives [28]. Hence, the total cost is 6 + 12 + 16 + 28 = 62.

// Input: arr[] = [10]
// Output: 0
// Explanation: Since there is only one rope, no connections are needed, so the cost is 0.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104

// ---------------------------------------------------------------------

// Your Guide to Solving It
// Since you already have your JavaScript Min-Heap implementation ready, mapping this intuition to code is a breeze. Here is your game plan:

// Initialize the Heap: Create an instance of your Min-Heap and insert all the elements of the arr into it.

// Track the Cost: Create a variable, say totalCost, and set it to 0.

// The Core Loop: While your Min-Heap has more than 1 element inside it:

// Extract the minimum element (the smallest rope).

// Extract the new minimum element (the second smallest rope).

// Add them together to get the currentCost.

// Add this currentCost to your totalCost.

// Push the currentCost (the newly formed rope) back into the Min-Heap.

// Finish: Once the while loop ends (meaning only 1 massive connected rope remains in the heap), return your totalCost.

// import { MinHeap } from "../SIMILAR-PRACTICE/2. min-heap";
const { PriorityQueue, MinPriorityQueue } = require("@datastructures-js/priority-queue");

function minimumCostOfRopes(nums) {
  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    minHeap.enqueue(nums[i]);
  }

  let totalCost = 0;

  while (minHeap.size() > 1) {
    const minimumElement = minHeap.dequeue();
    const secondMinimumElement = minHeap.dequeue();

    const currentCost = minimumElement + secondMinimumElement;

    totalCost += currentCost;

    minHeap.enqueue(currentCost);
  }

  return totalCost;
}

console.log(minimumCostOfRopes([4, 3, 2, 6]));

// TC - O(n) for iterating over each element, and extracting the minHeap is O(logn) so overall O(n log n)
// SC - O(n) for mean heap, because we are creaing the mean heap which stores N elements at any given time