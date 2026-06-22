// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input 1:
// nums = [5,7,7,8,8,10], target = 8
// Output 1:
// [3, 4]
// Explanation 1:
// 8 is present from 3rd index to 4th index
// Input 2:
// nums = [5,7,7,8,8,10], target = 6
// Output 2:
// [-1, -1]
// Constraints:
// n == nums.length
// 0 <= n <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109

function main(array, target) {
  return [firstOccurrence(array, target), lastOccurence(array, target)];
}

function firstOccurrence(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      result = mid;
      right = mid - 1; // even though found the occurence need to search the right
    }
  }

  return result;
}

function lastOccurence(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  return result;
}

console.log(main([5, 7, 7, 8, 8, 10], 8));