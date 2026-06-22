// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Input 1:
// grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output 1:
// 8
// Explanation 1:
// There are 8 negatives number in the matrix.

// Input 2:
// grid = [[3,2],[1,0]]
// Output 2:
// 0

// Constraints:
// 1 <= grid.length, grid[i].length <= 102
// -100 <= grid[i][j] <= 100

// function solve(grid) {
//   let count = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] < 0) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(
//   solve([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ]),
// );

function solve(grid) {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  let i = 0;
  let j = cols - 1; // start top-right

  while (i < rows && j >= 0) {
    if (grid[i][j] < 0) {
      count += rows - i; // all elements below are also negative
      j--; // move left
    } else {
      i++; // move down
    }
  }

  return count;
}

console.log(
  solve([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ]),
);

// TC: O(m + n) — at each step you either move left or down, so at most m + n steps total
// SC: O(1)
