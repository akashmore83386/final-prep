// Given an m x n binary matrix mat, return the number of special positions in mat.

// A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Input 1: mat = [[1,0,0],[0,0,1],[1,0,0]]
// Output 1: 1
// Explanation 1: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

// Input 2: mat = [[1,0,0],[0,1,0],[0,0,1]]
// Output 2: 3
// Constraints:
// 1 <= mat.length, mat[i].length <= 102
// mat[i][j] is either 0 or 1.

// 1 0 0
// 0 0 1
// 1 0 0

// rowCount = [1, 1, 1]
// colCount = [2, 0, 1]

// DRY RUN
// countSpecialPosition = 1

// matrix[0][0] = 1
// rowCount[0] = 1
// colCount[0] = 2

// matrix[0][1] = 0
// rowCount[0] = 1
// colCount[1] = 0

// matrix[0][2] = 0
// rowCount[0] = 1
// colCount[2] = 1

// matrix[1][0] = 0
// rowCount[1] = 1
// colCount[0] = 2

// matrix[1][1] = 0
// rowCount[1] = 1
// colCount[1] = 0

// matrix[1][2] = 1
// rowCount[1] = 1
// colCount[2] = 1 --> THIS WORKED, Increase the counter

function solve(matrix) {
  const oneCountsInRows = new Array(matrix.length).fill(0);
  const oneCountsInCols = new Array(matrix[0].length).fill(0);

  // fill the both arrays by how many times 1 is appearing in the array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        oneCountsInRows[i]++;
        oneCountsInCols[j]++;
      }
    }
  }

  // check special positions arrays
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        matrix[i][j] === 1 &&
        oneCountsInRows[i] === 1 &&
        oneCountsInCols[j] === 1
      ) {
        count++;
      }
    }
  }

  return count;
}

console.log(
  solve([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);

// READ QUESTION 2 TIMES
// UNDERSTAND IT, IF YOU CAN'T UNDERSTAND FROM THE INTERVIEWER
// TRY DIFFERENT INPUTS, PROBABLY 3-4. DRY RUN ON THEM
// FOCUS ON THE EDGE CASES, ASK CLARIFYING QUESTIONS RELATED TO EDGE CASES

// THINK LOUDLY, LET THE INTERVEWER KNOW IF ON RIGHT PATH, OR PROVIDE THE HINT TO YOU
// PROVIDE THE SIMPLE SOLUTION AND CHECK IT'S COMPLEXITIES

// COME UP WITH THE OPTIMAL SOLUTION BY BOUNDING RULE
// CODE IT
