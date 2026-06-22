// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

function solve(mat, r, c) {
  const rows = mat.length;
  const cols = mat[0].length;

  // check if reshpe possible
  if (rows * cols !== r * c) {
    return mat;
  }

  // flat array
  let flatArray = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      flatArray.push(mat[i][j]);
    }
  }

  // reshape
  const ans = Array.from({ length: r }, () => new Array(c).fill(0));
  let index = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      ans[i][j] = flatArray[index];
      index++;
    }
  }

  return ans;
}

console.log(
  solve(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4,
  ),
);

// O(rows * cols)
// O(m * n)