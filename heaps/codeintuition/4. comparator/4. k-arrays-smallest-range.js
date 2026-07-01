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