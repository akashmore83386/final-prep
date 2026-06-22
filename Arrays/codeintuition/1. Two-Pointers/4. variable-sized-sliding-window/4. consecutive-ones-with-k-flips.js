// Given a binary array arr and a non-negative integer k, write a function to find and return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1
// Input: arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 1
// Output: 5
// Explanation: The maximum number of consecutive ones is 5 if we flip the last 0.
// Example 2
// Input: arr = [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0], k = 2
// Output: 9
// Explanation: The maximum number of consecutive ones is 9 if we flip the 0s at index 3 and 5.
// Example 3
// Input: arr = [0, 0, 0, 0], k = 2
// Output: 2
// Explanation: The maximum number of consecutive ones is 2 if we flip any 2 consecutive 0s.

function solve(arr, k) {
  let maxlength = 0;
  let left = 0;
  let flippedTimes = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      flippedTimes++;
    }

    while (flippedTimes > k) {
      if (arr[left] === 0) {
        flippedTimes--;
      }
      left++;
    }
    maxlength = Math.max(maxlength, right - left + 1);
  }
  return maxlength;
}

console.log(solve([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 1));
// O(n)
// O(1)