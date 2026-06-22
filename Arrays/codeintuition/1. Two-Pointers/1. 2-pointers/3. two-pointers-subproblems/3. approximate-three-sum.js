// Given an integer array arr and an integer target, write a function to find three integers in arr such that the sum is closest to the target. You must return the sum of the three integers.

// You may assume that each input would have exactly one solution.
// Example 1
// Input: arr = [2, 7, 11, 15], target = 3
// Output: 20
// Explanation: 2 + 7 + 11 = 20 is the sum of three numbers that are closest to the target.
// Example 2
// Input: arr = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation: -1 + 2 + 1 = 2 is the sum of three numbers that are closest to the target.
// Example 3
// Input: arr = [0, 0, 0], target = 1
// Output: 0
// Explanation: 0 + 0 + 0 = 0 is the sum of three numbers that are closest to the target.

function solve(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  let minDiff = Math.abs(closestSum - target);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      const diff = Math.abs(sum - target);

      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return closestSum;
      }
    }
  }
  return closestSum;
}

console.log(solve([2, 7, 11, 15], 3));

// O(n^2)
// O(n)