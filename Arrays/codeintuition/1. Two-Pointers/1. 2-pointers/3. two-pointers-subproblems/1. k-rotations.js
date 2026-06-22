// Given an array arr and a non-negative number k, write a function to rotate the array by k steps to the right.

// Your function must do it by modifying the input array in-place i.e you must do it in O(1) space complexity.
// Example 1
// Input: arr = [1, 2, 3, 4, 5], k = 3
// Output: [3, 4, 5, 1, 2]
// Explanation: Below are the rotations:
// Rotate 1 step to the right -> [5, 1, 2, 3, 4]
// Rotate 2 steps to the right -> [4, 5, 1, 2, 3]
// Rotate 3 steps to the right -> [3, 4, 5, 1, 2]
// Example 2
// Input: arr = [1, 2, 3, 4, 5], k = 5
// Output: [1, 2, 3, 4, 5]
// Explanation: Below are the rotations:
// Rotate 1 step to the right -> [5, 1, 2, 3, 4]
// Rotate 2 steps to the right -> [4, 5, 1, 2, 3]
// Rotate 3 steps to the right -> [3, 4, 5, 1, 2]
// Rotate 4 steps to the right -> [2, 3, 4, 5, 1]
// Rotate 5 steps to the right -> [1, 2, 3, 4, 5]
// Example 3
// Input: arr = [1, 2, 3, 4, 5], k = 0
// Output: [1, 2, 3, 4, 5]
// Explanation: There are no rotations as k is 0.

function solve(arr, k) {
  k = k % arr.length; // ← normalize k, Rule of thumb: any time k is used as a rotation step, normalize it first — k % n is almost always required.

  reverse(arr, 0, arr.length - k - 1);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);

  function reverse(arr, left, right) {
    while (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
    }
  }

  return arr;
}

console.log(solve([1, 2, 3, 4, 5], 3));

// O(n)
// O(1)