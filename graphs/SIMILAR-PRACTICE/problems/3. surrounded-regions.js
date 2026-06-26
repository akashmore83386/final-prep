// The problem is Surrounded Regions (LeetCode 130).You are given an $m \times n$ matrix full of 'X' and 'O'. Your job is to find all the regions of 'O's that are completely surrounded by 'X's. Once you find a surrounded region, you must flip all its 'O's into 'X's.If an 'O' region touches the border, it is not surrounded, so it gets to stay an 'O'.

// Input
// const grid = [
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"] // Notice the 'O' on the bottom row
// ]

// Output after your function runs:
// [
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"], // Flipped to X because it was closed!
//   ["X", "X", "X", "X"], // Flipped to X because it was closed!
//   ["X", "O", "X", "X"]  // Saved! Kept as O because it touches the border.
// ]

function solve(board) {
  if (!board || board.length === 0) return;

  const n = board.length;
  const m = board[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // The drone now takes a 'currentRegion' array to remember where it's been
  function dfs(i, j, currentRegion) {
    visited[i][j] = true;

    // Record this cell's coordinates into our memory bag
    currentRegion.push([i, j]);

    let isSurrounded = true;

    // If this cell is on the border, the region is NOT completely surrounded
    if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
      isSurrounded = false;
    }

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    for (let k = 0; k < 4; k++) {
      let newX = i + dx[k];
      let newY = j + dy[k];

      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < m &&
        board[newX][newY] === "O" &&
        !visited[newX][newY]
      ) {
        // Keep exploring and pass the same memory bag down
        const neighborSurrounded = dfs(newX, newY, currentRegion);

        // If any neighbor touches a border, the whole region leaks
        if (neighborSurrounded === false) {
          isSurrounded = false;
        }
      }
    }
    return isSurrounded;
  }

  // THE GLOBAL SCAN
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "O" && !visited[i][j]) {
        // Create a fresh memory bag for this specific region
        const currentRegion = [];

        const surrounded = dfs(i, j, currentRegion);

        // If the flag stayed true, open the bag and flip everything to 'X'!
        if (surrounded === true) {
          for (const [r, c] of currentRegion) {
            board[r][c] = "X";
          }
        }
      }
    }
  }

  return board;
}

const grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"], // Notice the 'O' on the bottom row
];

console.log(solve(grid));