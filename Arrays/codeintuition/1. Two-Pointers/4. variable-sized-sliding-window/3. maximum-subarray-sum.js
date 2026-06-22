// Given an integer array arr, write a function to find the non-empty subarray with the maximum sum and return that sum.

// Example 1
// Input: arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray [4, -1, 2, 1] has the largest sum of 6.
// Example 2
// Input: arr = [5, 4, -1, 7, 8]
// Output: 23
// Explanation: The subarray [5, 4, -1, 7, 8] has the largest sum of 23.
// Example 3
// Input: arr = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum of 1.

function solve(arr) {
  if (arr.length === 0) return 0;
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], arr[i] + currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(solve([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// O(n)
// O(1)
