// Given a binary array arr, write a function to find and return the maximum number of consecutive 1's in the array.

// Example 1
// Input: arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
// Output: 4
// Explanation: The maximum number of consecutive ones is 4.
// Example 2
// Input: arr = [1, 1, 0, 0, 0, 1, 1, 0, 1, 0]
// Output: 2
// Explanation: The maximum number of consecutive ones is 2.
// Example 3
// Input: arr = [0, 0, 0]
// Output: 0
// Explanation: The maximum number of consecutive ones is 0.

function solve(arr) {
  let count = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 1) {
      count = Math.max(count, right - left + 1);
    } else {
      left = right + 1;
    }
  }

  return count;
}

console.log(solve([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]));

// O(n)
// O(1)