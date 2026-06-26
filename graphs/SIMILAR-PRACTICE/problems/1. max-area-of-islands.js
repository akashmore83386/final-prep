// You are given the exact same 2D grid where "1" represents land and "0" represents water. An island is still a group of "1"s connected 4-directionally (up, down, left, right).

// Instead of counting how many total islands there are, your goal this time is to find the largest island on the map and return its area (the total number of "1" cells that make up that single island). If there is no island, the max area is 0.

function maxAreaOfIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  let maxArea = 0;

  function dfs(i, j) {
    // Step 1: Mark as visited so we don't loop back to it
    visited[i][j] = true;

    // Step 2: Count THIS current cell as 1 unit of area
    let currentIslandSize = 1;

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
        grid[newX][newY] === "1" &&
        visited[newX][newY] === false
      ) {
        // Step 3: CRITICAL FIX!
        // We add the size of whatever the neighbor's DFS finds to our current island size.
        currentIslandSize += dfs(newX, newY);
      }
    }

    // Step 4: Return the total size accumulated by this cell and all its sub-branches
    return currentIslandSize;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && visited[i][j] === false) {
        // Since DFS now counts itself, we just capture the direct result
        const islandArea = dfs(i, j);

        // Is this island bigger than the biggest one we've seen so far?
        maxArea = Math.max(maxArea, islandArea);
      }
    }
  }

  return maxArea;
}

const grid = [
  ["0", "1", "0", "0"],
  ["1", "1", "1", "0"],
  ["0", "1", "0", "0"],
  ["0", "0", "0", "1"],
];

console.log(maxAreaOfIslands(grid));