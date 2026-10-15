// we are given an array of array, we need to return the smallest range, a smallest range is the range which contain the at least 1 number from every single inside array. 

// Input - [[4, 8], [3, 6], [4, 5]]
// Output - [3, 4]

// If we check the first array, we can see that 4 comes in the range of [3, 4], also for the second array, 3 comes in the range of [3, 4], also for the 3rd array, 4 comes in the range. So that means, every element is coming in the range [3, 4] so it is the smallest range.

// Approach - 

// Now to have the smallest range, what we can do is we can have the MinHeap, where we will be putting all the values from each array, and we are going to push first element. Because since the arrays are sorted, first element will be smallest. So we are going to push first element from every array in the minHeap.

// We will be storing like this in our minHeap -> [value, i, 0], value will be the actual element, i will be the index of the array in our whole array, 0 will be the 0th index of every element that we are pushing

// Now using a loop we will push the first elements of evey single array, our minHeap will look like this -> [[3, 1, 0], [4, 0, 0], [4, 2, 0]]

// Now we can have the range as minimum value of from the heap and currentMax as the maximum value so far in the heap, so bestRange = [minHeap.front()[0], currentMax] -> [3, 4]

// Now we need to shrink the 

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function smallestRange(nums) {
    const k = nums.length;
    // Min-Heap stores: [value, listIndex, elementIndex]
    // We order the heap by 'value' to always know which is the smallest element
    const minHeap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });

    let currentMax = -Infinity;

    // 1. Initial Setup: Push the first element of every list into the Min-Heap
    for (let i = 0; i < k; i++) {
        const val = nums[i][0];
        minHeap.enqueue([val, i, 0]);
        // Track the global maximum among the current heads of the lists
        currentMax = Math.max(currentMax, val);
    }

    // Initialize our best range as [min, max]
    let bestRange = [minHeap.front()[0], currentMax];

    // 2. Shrink the range
    // We continue as long as every list has at least one element in our heap
    while (true) {
        const [minVal, listIdx, elemIdx] = minHeap.dequeue();

        // Check if the current range [minVal, currentMax] is smaller than bestRange
        if (currentMax - minVal < bestRange[1] - bestRange[0]) {
            bestRange = [minVal, currentMax];
        }

        // 3. Move the pointer forward in the list that contained the minimum value
        const nextElemIdx = elemIdx + 1;

        // If we reached the end of one of the lists, we can't form a valid range anymore
        if (nextElemIdx >= nums[listIdx].length) {
            break;
        }

        // Push the next element from the same list into the heap
        const nextVal = nums[listIdx][nextElemIdx];
        minHeap.enqueue([nextVal, listIdx, nextElemIdx]);

        // Update currentMax if the new element is larger
        currentMax = Math.max(currentMax, nextVal);
    }

    return bestRange;
}

console.log(smallestRange([[4, 8], [3, 6], [4, 5]]))