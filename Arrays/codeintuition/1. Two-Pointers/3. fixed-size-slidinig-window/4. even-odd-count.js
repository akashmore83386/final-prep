// Given an integer array arr and a positive integer k, write a function to find and return the count of even and odd numbers, respectively, in every subarray of size k.

// Example 1
// Input: arr = [4, 4, 5, 1, 4], k = 3
// Output: [[2, 1], [1, 2], [1, 2]]
// Explanation: Above is the count of even and odd numbers in each subarray of size 3.
// Example 2
// Input: arr = [1, 2, 3, 5], k = 1
// Output: [[0, 1], [1, 0], [0, 1], [0, 1]]
// Explanation: Above is the count of even and odd numbers in each subarray of size 1.
// Example 3
// Input: arr = [1, 2, 3, 5], k = 4
// Output: [[1, 3]]
// Explanation: Above is the count of even and odd numbers in each subarray of size 4.

function solve(arr, k) {
  let evenCount = 0;
  let oddCount = 0;
  const res = [];

  // first window
  for (let i = 0; i < k; i++) {
    if (arr[i] % 2 === 0) evenCount++;
    else oddCount++;
  }
  res.push([evenCount, oddCount]);

  // slide the window
  for (let i = k; i < arr.length; i++) {
    // add incoming
    if (arr[i] % 2 === 0) evenCount++;
    else oddCount++;

    // remove outgoing
    if (arr[i - k] % 2 === 0) evenCount--;
    else oddCount--;

    res.push([evenCount, oddCount]);
  }

  return res;
}

console.log(solve([4, 4, 5, 1, 4], 3));

// O(n)
// O(n)