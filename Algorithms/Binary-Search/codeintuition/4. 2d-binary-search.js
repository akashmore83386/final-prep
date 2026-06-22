// Given an N x M integer matrix and an integer target, write a function to search the target in the matrix. If the target exists, return true otherwise, return false. The matrix has the following properties.

// Integers in each row in the matrix are sorted in non-descending order.
// The first value in each row is greater than the last integer of the previous row.
// You must do this in a time complexity of O(log(N*M)).
// Example 1
// Input: matrix = [[1, 2, 2, 4], [5, 5, 5, 5], [9, 10, 11, 12]], target = 12
// Output: true
// Explanation: 12 is present in the matrix.
// Example 2
// Input: matrix = [[1, 2, 2, 4], [5, 5, 5, 5], [9, 10, 11, 12]], target = 5
// Output: true
// Explanation: 5 is present in the matrix.
// Example 3
// Input: matrix = [[1, 2, 2, 4], [5, 5, 5, 5], [9, 10, 11, 12]], target = 13
// Output: false
// Explanation: 13 is not present in the matrix.

function solve(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const middleRow = Math.floor(mid / cols);

    const middleCol = mid % cols;

    const middleValue = matrix[middleRow][middleCol];

    if (middleValue < target) {
      left = mid + 1;
    } else if (middleValue > target) {
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
      [1, 2, 2, 4],
      [5, 5, 5, 5],
      [9, 10, 11, 12],
    ],
    13,
  ),
);

// TC - O(log (rows * cols))
// SC - O(1)