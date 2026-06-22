// Given an integer array arr and an integer target, write a function to check if two numbers exist in the array that sum up to the target. If such pairs exist, return all of them, if not return an empty array. You can return the answer in any order.

// You must not return the same pair more than once i.e. all pairs should be unique.
// Example 1
// Input: arr = [1, 2, 2, 3, 4, 5], target = 6
// Output: [[1, 5], [2, 4]]
// Explanation: The numbers 1 and 5, as well as the numbers 2 and 4, sum up to make the target 6.
// Example 2
// Input: arr = [1, 2, 2, 2, 2], target = 3
// Output: [[1, 2]]
// Explanation: The numbers 1 and 2 sum up to 3.
// Example 3
// Input: nums = [2], target = 2
// Output: []
// Explanation: No pair sum up to 2.

function solve(arr) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  const res = [];

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      res.push([arr[left], arr[right]]);

      left++;
      right--;

      while (left < right && arr[left] === arr[left - 1]) left++;
      while (left < right && arr[right] === arr[right + 1]) right--;
    }
  }

  return res;
}

console.log(solve([1, 2, 2, 3, 4, 5], 6));

// O(n)
// O(1)