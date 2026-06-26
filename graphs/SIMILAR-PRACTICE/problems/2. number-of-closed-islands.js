// This problem uses a similar setup, but with two changes to keep you on your toes:

// The values are flipped: In this problem, 0 represents land and 1 represents water.

// The Twist: We only care about Closed Islands. An island is considered "closed" if it is completely surrounded by water on all four sides. If any part of the island touches the edge/boundary of the grid, it is not closed (because it "leaks" off the map).

// Take a look at this grid:

// const grid = [
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 0] // Notice the 0 in the bottom right corner
// ]

// The island in the middle (the 0s) is completely surrounded by 1s. It is closed.

// The single 0 in the very bottom-right corner touches the edge of the map. It is open (not closed).

// The correct answer for this grid would be 1.

function closedIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  let closedIslandsCount = 0;

  // This is our drone. It returns true if the island is closed, false if it leaks.
  function dfs(i, j) {
    visited[i][j] = true;

    // ASSUMPTION: Assume this specific piece of land is safely closed...
    let currentCellIsClosed = true;

    // ...BUT, if this current cell is on the boundary, it's touching the outside!
    // It leaks! So this specific cell makes the island "not closed".
    if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
      currentCellIsClosed = false;
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
        grid[newX][newY] === 0 &&
        !visited[newX][newY]
      ) {
        // CRITICAL BIT: We ask the neighbor drone, "Did your path leak?"
        const neighborIsClosed = dfs(newX, newY);

        // If even ONE neighbor leaks to the edge, the WHOLE island leaks.
        if (neighborIsClosed === false) {
          currentCellIsClosed = false;
        }
      }
    }

    // Return whether this entire branch stayed away from the edges
    return currentCellIsClosed;
  }

  // THE GLOBAL SCAN (Just like problem 1 and 2!)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0 && !visited[i][j]) {
        // Launch the drone and see what it reports back
        if (dfs(i, j) === true) {
          // If the drone traveled the whole island and never touched an edge:
          closedIslandsCount++;
        }
      }
    }
  }

  return closedIslandsCount;
}

const grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0], // Notice the 0 in the bottom right corner
];

console.log(closedIslands(grid));

// Notice the progression of your mastery over these three problems:

// Number of Islands: The DFS just spray-painted cells to avoid double-counting.

// Max Area of Island: The DFS calculated a number and rolled it back up to find the largest sum.

// Number of Closed Islands: The DFS calculated a boolean (True/False) to validate the shape's structure.