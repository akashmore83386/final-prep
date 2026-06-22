// Given an array arr consisting of non negative integers and an integer target, write a function to find the largest possible sum of two distinct elements in the array that is strictly less than the target. If no such pair exists, return -1 instead.

// Example 1
// Input: arr = [34, 23, 1, 24, 75, 33, 54, 8], target = 60
// Output: 58
// Explanation: We can use 34 and 24 to sum 58, which is less than 60.
// Example 2
// Input: arr = [34, 23, 1, 24, 75, 33, 54, 8], target = 36
// Output: 35
// Explanation: We can use 34 and 1 to sum 35, which is less than 36.
// Example 3
// Input: arr = [10, 20, 30], target = 15
// Output: -1
// Explanation: In this case, it's not possible to get a pair whose sum is less than 15.

function solve(arr, target) {
  arr.sort((a, b) => a - b);
  let maxSum = -1;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum < target) {
      maxSum = Math.max(maxSum, sum);
      left++;
    } else {
      right--;
    }
  }

  return maxSum;
}

console.log(solve([34, 23, 1, 24, 75, 33, 54, 8], 60));

// O(n logn)
// O(1)