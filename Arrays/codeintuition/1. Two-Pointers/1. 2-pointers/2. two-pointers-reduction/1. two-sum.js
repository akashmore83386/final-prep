// Given an integer array arr and an integer target, write a function to check if two numbers exist in the array that sum up to the target. If such a pair exists, return them in an array, if not return an empty array. You can return the answer in any order.

// It is guaranteed that not more than one answer exists.
// Example 1
// Input: arr = [2, 8, 3, 6, 4], target = 7
// Output: [3, 4]
// Explanation: The numbers 3 and 4 sum up to make the target 7.
// Example 2
// Input: arr = [2, -1, 5, -4, 3], target = 34
// Output: []
// Explanation: No pair sums up to 34.
// Example 3
// Input: arr = [2], target = 2
// Output: []
// Explanation: No pair sums up to 2.

function solve(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [arr[left], arr[right]];
    }
  }

  return [];
}

console.log(solve([2, 8, 3, 6, 4], 7));

// O(n logn)
// O(1)