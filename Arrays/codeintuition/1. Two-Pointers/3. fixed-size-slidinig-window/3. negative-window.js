// Given an integer array arr and a positive integer k, write a function to find and return the count of negative numbers in every subarray of size k.

// Example 1
// Input: arr = [4, -4, 5, -1, 4], k = 3
// Output: [1, 2, 1]
// Explanation: Above is the count of negative numbers in each subarray of size 3.
// Example 2
// Input: arr = [1, -2, 3, -5], k = 1
// Output: [0, 1, 0, 1]
// Explanation: Above is the count of negative numbers in each subarray of size 1.
// Example 3
// Input: arr = [-1, -2, 3, -5], k = 4
// Output: [3]
// Explanation: Above is the count of negative numbers in each subarray of size 4.

function solve(arr, k) {
  let currentWindowNegativeCount = 0;
  const res = [];

  // first window
  for (let i = 0; i < k; i++) {
    if (arr[i] < 0) {
      currentWindowNegativeCount++;
    }
  }
  res.push(currentWindowNegativeCount);

  // slide the window
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < 0) currentWindowNegativeCount++;
    if (arr[i - k] < 0) currentWindowNegativeCount--;
    res.push(currentWindowNegativeCount);
  }

  return res;
}

console.log(solve([4, -4, 5, -1, 4], 3));

// O(n)
// O(n)