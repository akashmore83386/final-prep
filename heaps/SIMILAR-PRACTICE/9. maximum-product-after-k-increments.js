const { MinPriorityQueue } = require("@datastructures-js/priority-queue")

function maxProductAfterKIncrements(nums, k) {
    const minHeap = new MinPriorityQueue()

    const MOD = 1_000_000_007; // 10^9 + 7

    for (let i = 0; i < nums.length; i++) {
        // push every element in the minHeap
        minHeap.enqueue(nums[i])
    }

    // k chances
    for (let i = 0; i < k; i++) {
        let value = minHeap.dequeue()
        value = value + 1

        // after incrementing push back in heap
        minHeap.enqueue(value)
    }

    // Now we have the heap with updated values, let's calculate the product
    let product = 1

    while (!minHeap.isEmpty()) {
        product = (product * minHeap.dequeue()) % MOD;
    }

    return product
}

console.log(maxProductAfterKIncrements([6, 3, 3, 2], 2))

// TC - O(n + k lokg n)
// SC - O(n)

// NEW concept modulo

// The modulo concept (specifically `% 10_000_000_007` or `% 10^9 + 7`) is a staple in competitive programming and platforms like LeetCode.

// Here is exactly why we need it and how to spot when to use it:

// ### Why do we need it here? (Integer Overflow)

// Computers have a limit on how large a number they can store accurately in standard memory.
// In JavaScript, the maximum safe integer is `9,007,199,254,740,991` (`Number.MAX_SAFE_INTEGER`).

// In the "Maximum Product" problem, imagine your array has fifty `100,000`s in it. If you multiply them all together ($100,000^{50}$), the number becomes so massively astronomical that JavaScript literally cannot hold it in memory. It will lose precision (rounding off digits) and eventually just spit out `Infinity`.

// By applying `% 1_000_000_007` **at every single step of your multiplication**, you force the running product to stay safely below $10^9 + 7$. Because of the mathematical properties of modulo, doing this at every step gives the exact same final "modulo-ed" answer as if you had infinite memory and did it at the very end.

// *(Fun fact: $10^9 + 7$ is used because it's a large prime number that fits nicely inside standard 32-bit integers, preventing intermediate steps from overflowing!)*

// ### How to know when you need it?

// You will **never** have to guess. The problem description will almost always explicitly tell you:

// > *"Since the answer may be very large, return it modulo $10^9 + 7$."*

// You will usually see this warning in these specific types of problems:

// 1. **Multiplication problems:** Like the one you just solved, where repeated multiplication causes numbers to explode.
// 2. **Counting / Combinatorics problems:** Questions that ask "How many ways to form an array..." or "Number of valid paths...". The number of combinations often grows exponentially.
// 3. **Dynamic Programming (DP):** Especially DP problems that ask for the total number of ways to reach a target state (e.g., variations of the "Climbing Stairs" or "Coin Change" problems).

// ### The Golden Rule of Modulo

// When a question asks for a modulo, you must apply it **inside your loop** at every step, not just to the final return value.

// **Wrong:**

// ```javascript
// let product = 1;
// for (let num of array) {
//     product = product * num; // Overflow happens here!
// }
// return product % 1_000_000_007;

// ```

// **Right:**

// ```javascript
// let product = 1;
// for (let num of array) {
//     product = (product * num) % 1_000_000_007; // Keeps it safe at every step
// }
// return product;

// ```