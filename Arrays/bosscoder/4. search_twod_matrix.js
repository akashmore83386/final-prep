// You are given an m x n integer matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row. Given an integer target, return true if the target is in the matrix or false otherwise.

// Write a solution in O(log(m * n)) time complexity.

// Input1: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output1: true
// Input2: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output2: false
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// 1  3  5  7
// 10 11 16 20
// 23 30 34 60

function solve(matrix, target) {
  // binary search traversal pattern
  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const mr = Math.floor(mid / rows);

    const mc = mid % cols;

    const mv = matrix[mr][mc];

    if (mv < target) {
      left = mid + 1;
    } else if (mv > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(
  solve(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);

// TC - O(log (m * n))
// SC - O(1)