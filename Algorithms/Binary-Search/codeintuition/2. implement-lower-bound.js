// Given an integer array arr that is sorted in ascending order and an integer target, write a function to search and return the index of the lower bound of the target in the array.

// Lower bound returns the index of the first element ≥ target. If multiple values are equal to the target, the lower bound returns the index of the first such value. You must do this in a time complexity of O(logN).

// Example 1
// Input: arr = [1, 5, 10, 15, 20, 25], target = 10
// Output: 2
// Explanation: The integer 10 is at index 2 in the array and is the lower bound.
// Example 2
// Input: arr = [1, 5, 10, 15, 20, 25], target = 17
// Output: 4
// Explanation: The integer 20 at index 4 is the lower bound for 17 in the array.
// Example 3
// Input: arr = [1, 5, 10, 15, 20, 25], target = 22
// Output: 5
// Explanation: The integer 25 at index 5 is the lower bound for 22 in the array.

function solve(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let ans = arr.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    // we need to find the mid element and check if the value is greater or equal to target then we have to return that mid index immediately
    if (arr[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

console.log(solve([1, 5, 10, 15, 20, 25], 17));

// TC - O(log n) we are searching in half
// SC - O(1) we are not using the extra space