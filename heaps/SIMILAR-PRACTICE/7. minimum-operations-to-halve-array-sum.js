const {
    PriorityQueue,
    MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

function minimumHalveArraySum(nums) {
    const maxHeap = new MaxPriorityQueue()

    let totalSum = 0

    // push every element in the maxHeap
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
        maxHeap.enqueue(nums[i])
    }

    let currentSum = totalSum
    let targetSum = totalSum / 2
    let operations = 0

    // keep running the loop until currentsum becomes the targetsum
    while (currentSum > targetSum) {
        let maxValue = maxHeap.dequeue()
        let halfValue = maxValue / 2

        // update the running sum
        currentSum = currentSum - halfValue

        // pushed the half value back in the maxHeap
        maxHeap.enqueue(halfValue)

        // increase the operations
        operations++
    }

    return operations
}

console.log(minimumHalveArraySum([5, 19, 8, 1]))

// Time complexity -

// 1. In the first loop we are building the heap, where we are pushin every element in the maxHeap, so it takes O(n log n)

// 2. In the second loop we are removing max value and also we are adding the half value back in the maxHeap, so it takes O(log n) and also we don't know how many times I will need to half my numbers to reach the targetSum, so we assign the variable k to represent the number of times loop executes

// Therefore - K iterations * O(log n)

// So the total TC comes out to be - O(n log n + k log n)

// Space Complexity -

// heap holds the exact same number of elements as the original array. Because it must store all N elements simultaneously so it should be O(n)