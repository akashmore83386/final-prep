// 1 2 3    1 4 7
// 4 5 6 -> 2 5 8
// 7 8 9    3 6 9

// Okay so that means the transpose of matric means the columns are becooming the rows.

function solve(matrix) {
  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      result[i][j] = matrix[j][i];
    }
  }

  return result;
}

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);

// TC - o(n^2)
// SC - o(n)