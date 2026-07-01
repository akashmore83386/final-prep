// kth smallest prime fraction

// [1,2,3,5], k = 3

// 1 / 2 = 0.5
// 1 / 3 = 0.33
// 1 / 5 = 0.2

// 2 / 3 = 0.66
// 2 / 5 = 0.4

// 3 / 5 = 0.6

// So the 3rd smallest fraction is [2, 5] which is 0.4

// we are going to keep the maxHeap of size k, where we are going to store all fraction as well as the indexes, so this is how we are going to store in the maxHeap - [fraction, i, j]

const { MaxPriorityQueue, PriorityQueue } = require("@datastructures-js/priority-queue")

function kthSmallestPrimeFraction(nums, k) {
    const maxHeap = new MaxPriorityQueue()

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const fraction = nums[i] / nums[j]

            maxHeap.enqueue([fraction, i, j])

            if (maxHeap.size() > k) {
                maxHeap.dequeue()
            }
        }
    }

    const [fraction, i, j] = maxHeap.dequeue()

    return [nums[i], nums[j]]
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3))

// Okay so above approach turns out to be the Brute force one - 

// TC - O(n^2 * log k)
// SC - O(k) to maintain the maxHeap

// Optimal approach -

// One hint which I missed and that is, since the input array is already sorted, I don't want to generate all the possible fractions to find the smallest ones.

// By seeding the heap with only the absolute smallest fraction from each "lane" and then sliding the denominator left (j - 1) only when a lane wins, you guarantee finding the Kth smallest without ever calculating all N 
// 2
//   possibilities. You've officially mastered the multi-pointer heap pattern!

function kthSmallestPrimeFraction(nums, k) {
    // Min-Heap ordered by the fraction value (ascending)
    // Element format: [fractionValue, numeratorIndex, denominatorIndex]
    const minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
    const n = nums.length;

    // Step 1: Seed the heap with the smallest fraction for each numerator
    // The smallest fraction for nums[i] is always over the largest denominator nums[n - 1]
    for (let i = 0; i < n - 1; i++) {
        minHeap.enqueue([nums[i] / nums[n - 1], i, n - 1]);
    }

    // Step 2: Pop the minimum element k - 1 times
    for (let step = 0; step < k - 1; step++) {
        const [_, i, j] = minHeap.dequeue();

        // If there is a next larger fraction available for this numerator, push it
        // (Moving the denominator pointer one step to the left makes the fraction larger)
        if (j - 1 > i) {
            minHeap.enqueue([nums[i] / nums[j - 1], i, j - 1]);
        }
    }

    // The kth pop contains our target answer
    const [_, i, j] = minHeap.dequeue();
    return [nums[i], nums[j]];
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3))

// Time Complexity: O(N+klogN)
// Building the initial heap takes O(N) time. Then, you perform the pop-and-push routine exactly k times. Each heap operation takes O(logN) because the heap size never exceeds N.

// Space Complexity: O(N) to hold at most one fraction per numerator in the heap.