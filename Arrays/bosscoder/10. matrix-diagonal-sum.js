// Given a square matrix mat, return the sum of the matrix diagonals. Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Input 1: mat = [[1,2,3], [4,5,6], [7,8,9]]
// Output 1: 25
// Explanation 1: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25. Notice that element mat[1][1] = 5 is counted only once.

// Input 2: mat = [[1,1,1,1], [1,1,1,1], [1,1,1,1], [1,1,1,1]]
// Output 2: 8
// Constraints:
// n == mat.length, mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

function solve(mat) {
  let sum = 0;
  let left = 0;
  let right = mat.length * mat[0].length - 1;

  const middle = left + Math.floor((right - left) / 2);
  const mr = Math.floor(middle / mat.length);
  const mc = middle % mat[0].length;
  const mv = mat[mr][mc];
  // get positive and negative diagoonal sum
  for (let i = 0; i < mat.length; i++) {
    // positive diagonal
    sum += mat[i][i];

    // negative diagonal
    sum += mat[i][mat[0].length - 1 - i];
  }

  return mat.length % 2 === 1 ? sum - mv : sum;
}

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

// O(n)
// O(1)