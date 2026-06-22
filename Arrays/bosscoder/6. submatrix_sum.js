// the task to find the sum of all the submatrices

// 1 1
// 1 1

// sum - 16

// Number of sub-matrices with 1 elements = 4
// Number of sub-matrices with 2 elements = 4
// Number of sub-matrices with 3 elements = 0
// Number of sub-matrices with 4 elements = 1
// Since all the entries are 1, the sum becomes sum = 1 * 4 + 2 * 4 + 3 * 0 + 4 * 1 = 16

// brute force
function solve(matrix) {
  let maxSum = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;

  // top row
  for (let topRow = 0; topRow < rows; topRow++) {
    // left col
    for (let leftCol = 0; leftCol < cols; leftCol++) {
      // bottom row
      for (let bottomRow = topRow; bottomRow < rows; bottomRow++) {
        // right col
        for (let rightCol = leftCol; rightCol < cols; rightCol++) {
          // submatrix
          for (let r = topRow; r <= bottomRow; r++) {
            // submatrix sum
            let subMatrixSum = 0;
            for (let c = leftCol; c <= rightCol; c++) {
              subMatrixSum += matrix[r][c];
            }

            maxSum += subMatrixSum;
          }
        }
      }
    }
  }

  return maxSum;
}

console.log(
  solve([
    [1, 1],
    [1, 1],
  ]),
);

// Now since the above approach is not that much optimal, the TC of the above approach is O(n^6) and SC - O(1)

// So we need a more optimal approach when solving this question, and the more optimal approach which I can think of to just have the number of contribution in the final sum of the each individual elements.

function optimal(matrix) {
  let maxSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let contribution =
        (i + 1) * (i - matrix.length) * (j + 1) * (j - matrix[i].length);

      maxSum = maxSum + contribution * matrix[i][j];
    }
  }

  return maxSum;
}

console.log(
  optimal([
    [1, 1],
    [1, 1],
  ]),
);

// TC - O(n^2)
// SC - O(1)