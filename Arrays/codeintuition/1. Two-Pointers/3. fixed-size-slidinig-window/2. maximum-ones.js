// Given a binary array arr and a positive integer k, write a function to find and return the maximum number of 1's among all subarrays of size k.

// Example 1
// Input: arr = [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0], k = 5
// Output: 4
// Explanation: The maximum number of 1s among all subarrays of size 5 is 4.
// Example 2
// Input: arr = [1, 1, 0, 1, 0, 1, 1, 0, 1, 0], k = 4
// Output: 3
// Explanation: The maximum number of 1s among all subarrays of size 4 is 3.
// Example 3
// Input: arr = [0, 0, 0], k = 2
// Output: 0
// Explanation: The maximum number of 1s among all subarrays of size 2 is 0.

function solve(arr, k) {
  if (k > arr.length) -1;

  let maxOnes = 0;
  let onesInCurrentWindow = 0;

  // first window of size k
  for (let i = 0; i < k; i++) {
    if (arr[i] === 1) {
      onesInCurrentWindow++;
    }
  }

  maxOnes = onesInCurrentWindow;

  // next windows
  for (let i = k; i < arr.length; i++) {
    onesInCurrentWindow = onesInCurrentWindow - arr[i - k] + arr[i];
    maxOnes = Math.max(maxOnes, onesInCurrentWindow);
  }

  return maxOnes;
}

console.log(solve([1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0], 5));

// O(n)
// O(1)