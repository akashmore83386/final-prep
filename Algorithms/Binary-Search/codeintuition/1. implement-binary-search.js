// Given an integer array arr that is sorted in ascending order and an integer target, write a function to search for the target in the array. If the target exists, return its index otherwise, return -1.

// You must do this in a time complexity of O(logN).

function solve(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1
}

console.log(solve([-2, 0, 3, 4, 7, 9, 11], 2));

// TC - O(log n) traversing through array half
// SC - O(1) Not using the extra variable