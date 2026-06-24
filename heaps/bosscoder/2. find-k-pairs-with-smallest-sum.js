// Input: arr1 = [1, 7, 11], arr2 = [2, 4, 6], k = 3
// Output: [[1, 2], [1, 4], [1, 6]]
// Explanation: The first three pairs i.e. [1, 2], [1, 4], and [1, 6] are selected from the full sequence of possible pairs: [1, 2], [1, 4], [1, 6], [7, 2], [7, 4], [7, 6], [11, 2], [11, 4], and [11, 6], as they have the smallest sums.

// ## The Restaurant Menu Analogy

// Imagine you are at a restaurant. You want to order a **Combo Meal** consisting of one Soup and one Sandwich.

// The menus are already sorted from cheapest to most expensive:

// * **Soups (`arr1`):** Tomato (1 coin), Chicken (7 coins), Lobster (11 coins)
// * **Sandwiches (`arr2`):** Cheese (2 coins), Turkey (4 coins), Steak (6 coins)

// Your goal is to find the **3 absolute cheapest combo meals** possible.

// ### The "Aha!" Moment

// If I ask you for the absolute cheapest meal, you don't need to look at the Lobster or the Steak. You instantly know it’s the cheapest Soup plus the cheapest Sandwich:
// **Tomato (1) + Cheese (2) = 3 coins.**

// Now, what is the *second* cheapest?
// You still don't care about the Lobster or the Steak! The next cheapest meal is logically going to be a small "upgrade" from your first meal. You have two choices for an upgrade:

// 1. Keep the Tomato soup, but upgrade to the Turkey sandwich.
// 2. Keep the Cheese sandwich, but upgrade to the Chicken soup.

// **This is the core intuition:** You don't need to calculate all 9 possible combinations. You only ever need to look at the immediate "next step up" from the meals you've already found.

// ---

// ## How the Min-Heap Fits In (The "Shortlist")

// To keep track of these "next steps up" without getting confused, you keep a piece of paper. This paper is your **Min-Heap**. It is just a **shortlist** that always hands you the cheapest option currently written on it.

// To make sure we don't miss anything, we write down all the starting points (every Soup paired with the cheapest Sandwich) on our shortlist:

// * **Shortlist:**
// * Tomato + Cheese (3 coins)
// * Chicken + Cheese (9 coins)
// * Lobster + Cheese (13 coins)

// Now, we just repeat a simple process to find our top 3 meals:

// ### Finding Meal 1

// 1. Look at the shortlist. What’s the cheapest? **Tomato + Cheese (3)**. We take it!
// 2. Because we used the Tomato soup, we write down the *next* Tomato soup combo on our shortlist: **Tomato + Turkey (5)**.

// ### Finding Meal 2

// * **Current Shortlist:** [Tomato+Turkey (5), Chicken+Cheese (9), Lobster+Cheese (13)]

// 1. Look at the shortlist. What’s the cheapest? **Tomato + Turkey (5)**. We take it!
// 2. Because we used the Tomato soup again, we write down the *next* Tomato soup combo: **Tomato + Steak (7)**.

// ### Finding Meal 3

// * **Current Shortlist:** [Tomato+Steak (7), Chicken+Cheese (9), Lobster+Cheese (13)]

// 1. Look at the shortlist. What’s the cheapest? **Tomato + Steak (7)**. We take it!

// **We are done!** Our 3 cheapest meals are 3, 5, and 7. We never even had to calculate how much a Lobster + Steak combo costs.

// ---

// ## Bringing it Back to the Arrays

// This exact "menu" process is what the algorithm is doing:

// 1. **The Starting Shortlist:** We take every element in `arr1` and pair it with the first element in `arr2`. We put these in the Min-Heap.
// 2. **The Loop:** We ask the Min-Heap for the smallest sum.
// 3. **The "Upgrade":** When we pull a pair out, we look at the `arr2` element we just used, move one step to the right in `arr2`, and push that new "upgraded" pair back into the Min-Heap.

// We only calculate pairs as we need them, letting the Min-Heap automatically sort out which "upgrade" is the cheapest at any given moment.

// Does thinking about it as an expanding "shortlist" of menu upgrades make the heap approach click for you, or is the way the algorithm initializes the first column still feeling a bit fuzzy?

// import { MinHeap } from "../../SIMILAR-PRACTICE/2. min-heap.js";
const { PriorityQueue } = require("@datastructures-js/priority-queue");

function kSmallestSumPairs(arr1, arr2, k) {
  const result = [];

  // edge case - if either array is empty or k is 0, no pairs can be formed
  if (!arr1.length || !arr2.length || k === 0) {
    return result;
  }

  function compare(a, b) {
    // 1. Primary rule: Compare by total sum
    if (a[0] !== b[0]) return a[0] - b[0];
    // 2. Tie-breaker 1: Compare by index in arr1
    if (a[1] !== b[1]) return a[1] - b[1];
    // 3. Tie-breaker 2: Compare by index in arr2
    return a[2] - b[2];
  }

  // initialise our minHeap
  const minHeap = new PriorityQueue(compare);

  // Step 1: Pair every element of arr1 (up to k elements) with the very first element of arr2
  // We cap this at Math.min(arr1.length, k) because we never need more than k rows
  for (let i = 0; i < Math.min(arr1.length, k); i++) {
    const sum = arr1[i] + arr2[0];

    // We store: [sum, arr1_index, arr2_index]
    minHeap.enqueue([sum, i, 0]);
  }

  // Step 2: Extract the smallest and upgrade sequentially
  // We loop until we find k pairs OR our shortlist runs completely empty
  while (result.length < k && minHeap.size() > 0) {
    // Pop the absolute smallest combo currently on the shortlist
    const [currentSum, i, j] = minHeap.dequeue();

    // add the actual numbers to our result array
    result.push([arr1[i], arr2[j]]);

    // if there is a next element in arr2 for this specific arr1[i] item, push that "upgraded" combo onto the shortlist
    if (j + 1 < arr2.length) {
      const nextSum = arr1[i] + arr2[j + 1];
      minHeap.enqueue([nextSum, i, j + 1]);
    }
  }

  return result;
}

console.log(kSmallestSumPairs([1, 7, 11], [2, 4, 6], 3));