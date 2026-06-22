// Given an integer array arr and a positive integer k, write a function to find and return the minimum sum among all subarrays of size k. If no such subarray exists, return -1 instead.

// Example 1
// Input: arr = [4, 4, 5, 6, 4], k = 3
// Output: 13
// Explanation: The subarray [4, 4, 5] has a minimum sum of 13 and a size of 3.
// Example 2
// Input: arr = [1, 2, 3, 5], k = 1
// Output: 1
// Explanation: The subarray [1] has a minimum sum of 1 and a size of 1.
// Example 3
// Input: arr = [1, 2, 3, 5], k = 4
// Output: 11
// Explanation: The subarray [1, 2, 3, 5] has a minimum sum of 11 and a size of 4.

function solve(arr, k) {
  if (k > arr.length) return -1;

  let minSum = 0;
  let windowSum = 0;

  // build first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  minSum = windowSum;

  // now check every window, once we have the first window, remove from left, add from right
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; // remove from left, add from right
    minSum = Math.min(minSum, windowSum);
  }

  return minSum;
}

console.log(solve([4, 4, 5, 6, 4], 3));

// O(n)
// O(1)