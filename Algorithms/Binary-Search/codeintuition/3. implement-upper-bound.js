// Given an integer array arr that is sorted in ascending order and an integer target, write a function to search and return the index of the upper bound of the target in the array.

// Upper bound returns the index of the first element strictly > target. You must do this in a time complexity of O(logN).

// Example 1
// Input: arr = [1, 5, 10, 15, 20, 25], target = 10
// Output: 3
// Explanation: The integer 15 at index 3 is the upper bound of 10 in the array.

// Example 2
// Input: arr = [1, 5, 10, 15, 20, 25], target = 17
// Output: 4
// Explanation: The integer 20 at index 4 is the upper bound for 17 in the array.

// Example 3
// Input: arr = [1, 5, 10, 15, 20, 25], target = 25
// Output: 6
// Explanation: There is no upper bound for 25 in the array, so we return it to the end of the array.

function solve(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let ans = arr.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

console.log(solve([1, 5, 10, 15, 20, 25], 25));

// TC - O(log n) because we are traversing the array in the half
// SC - O(1) not using the extra variable