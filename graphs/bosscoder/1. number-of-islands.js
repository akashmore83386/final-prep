function numberOfIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;

  // THE MEMORY:
  // We need a map to remember where our "Local Flood" has already been.
  // Without this, we would count the same island multiple times, or our DFS would run in an infinite loop.
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  let islands = 0;

  // PHASE 3: THE LOCAL FLOOD
  // This function's only job is to map out a single, connected piece of land.
  function dfs(i, j) {
    // Step A: The very first thing we do is mark our current spot as visited.
    visited[i][j] = true;

    // Step B: Define our movement options (Up, Down, Left, Right)
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    // Step C: Look in all 4 directions
    for (let k = 0; k < 4; k++) {
      let newX = i + dx[k];
      let newY = j + dy[k];

      // Step D: The Boundary & Logic Check
      // We only continue flooding IF:
      // 1. We haven't fallen off the edge of the map (newX/newY are within 0 to n/m)
      // 2. The neighbor is actually Land ("1")
      // 3. We haven't already visited this neighbor
      if (
        newX >= 0 &&
        newX < n &&
        newY >= 0 &&
        newY < m &&
        grid[newX][newY] === "1" &&
        visited[newX][newY] === false
      ) {
        // Jump to that valid neighbor and repeat the process!
        dfs(newX, newY);
      }
    }
  }

  // PHASE 1: THE GLOBAL SCAN
  // Systematically check every single cell in the grid.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // PHASE 2: THE TRIGGER
      // If we find Land ("1") AND we haven't mapped it out yet...
      if (grid[i][j] === "1" && visited[i][j] === false) {
        // We confidently found a new island!
        islands++;

        // Immediately launch Phase 3 to flood this entire landmass.
        // This ensures all connected "1"s are marked as true in the `visited` array,
        // so the Phase 1 scan will ignore them when it reaches them later.
        dfs(i, j);
      }
    }
  }

  return islands;
}

const grid = [
  ["0", "1", "0", "0"],
  ["1", "1", "1", "0"],
  ["0", "1", "0", "0"],
  ["0", "0", "0", "1"]
]

console.log(numberOfIslands(grid));

// First we check if 1 exist in the cell and if it is not visisted by running a loop on our matrix/grid. If it is yes then we count it as the 1 island and increase the islands count by 1. Now since we have 1 island, we need to scan on it's 4 directions, if it is attached with another 1 on it's 4 directions then we don't increase the islands by 1 again, because that another 1 will be connected with our counted island 1, so we only scan and mark that as visited, so we don't visit that again, that means it will be part of our island which we have already counted. So for this scanning process we are using the DFS

// -> Yes, exactly! Your understanding is 100% correct. You have completely nailed the core intuition. Let's break down why your explanation is spot on:

// The Trigger: You correctly identified that finding an unvisited 1 guarantees you have found a brand new island. That is exactly why you increment the count immediately.

// The DFS Purpose: You perfectly understand that the DFS is just a "cleanup crew." Its only job is to fan out in all 4 directions and mark every attached 1 as visited.

// The Prevention: Because the DFS marks all connected pieces of land as visited, your main for loops will simply skip over them when they eventually reach those coordinates. This guarantees you never count the same island twice.

// You have successfully separated the two mechanisms in your mind: the Global Scan (which counts new islands) and the DFS (which maps them out so they aren't double-counted).

// If you hold onto this exact mental model, you are officially ready to tackle almost any connected-component grid problem out there! You've got this.



// --------------------------------------------------------

// export class Solution {
//   islandCount(grid) {
//     if (!grid || grid.length === 0) return 0

//     const R = grid.length
//     const C = grid[0].length

//     let visited = Array.from({ length: R }, () => Array(C).fill(false))

//     let numberOfIslands = 0

//     const directions = [
//       [-1, 0], // up
//       [0, 1], // right
//       [1, 0], // down
//       [0, -1], // left

//       // up-right
//       [-1, 1],

//       // right-down
//       [1, 1],

//       // down-left
//       [1, -1],

//       // left-up
//       [-1, -1]
//     ]

//     function dfs(r, c) {
//       visited[r][c] = true

//       for (let [dr, dc] of directions) {
//         let newRow = r + dr
//         let newCol = c + dc

//         if (newRow >= 0 && newRow < R &&
//           newCol >= 0 && newCol < C &&

//           grid[newRow][newCol] === 1 &&

//           !visited[newRow][newCol]
//         ) {
//           dfs(newRow, newCol)
//         }
//       }
//     }

//     for (let r = 0; r < R; r++) {
//       for (let c = 0; c < C; c++) {
//         if (grid[r][c] === 1 && !visited[r][c]) {
//           numberOfIslands++
//           dfs(r, c)
//         }
//       }
//     }

//     return numberOfIslands
//   }
// }