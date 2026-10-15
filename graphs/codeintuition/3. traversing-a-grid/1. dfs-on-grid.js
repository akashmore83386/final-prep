// 2. Implementing Depth-First Search (DFS) on a Grid

// Just like standard graphs, if a grid has isolated sections of 1s (land/allowed paths) separated by 0s (water/walls), a single DFS will not visit everything. We must use the Global Scan (nested for loops) to ensure we check every unvisited valid cell.

// Here is the standard, reusable template for Grid DFS:

// We are getting a grid we need to run the DFS on the grid, modelling the grid as the graph, and we need to return the coordinates array

function DFSOnGrid(grid) {
    // edge case if the grid is empty we return the empty array
    if (!grid || grid.length === 0) return []

    // we need to track the visited sets, so we initialise the visited same as the grid size and initialise it with the false
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false))

    // we need the result array for final output
    const result = []

    // we need the direction array to move in four directions, we need to follow the strict direction order as per the given in the question
    const directions = [
        [-1, 0], // up
        [0, 1], // right
        [1, 0], // down
        [0, -1] // left
    ]

    // now we have everything like visited tracker for cells/nodes, our final result array where we can push our coordinates for the dfs node/cell, and directions array so we can move to four directions, now we can run the dfs function

    function dfs(r, c) {
        // mark the cell/node as the visited and push the coordinates in the result array immediately
        visited[r][c] = true
        result.push([r, c])

        // Now check the neighbors for the current cell. How can we do that on grid? If it was graph we used to do this using getting the neighbors for current node from the graph(which was based on the adjList). BUT now since we are getting th grid we need to use the directions array to move in the 4 directions
        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            if (
                // we need to check that our newRow and newCol are within the bounds
                newRow >= 0 && newRow < grid.length &&
                newCol >= 0 && newCol < grid[0].length &&

                // We also need to check if the cell at newRow and newCol is 1, that means we can visit it
                grid[newRow][newCol] === 1 &&

                // And we also need to check that this cell is not visited previously
                !visited[newRow][newCol]
            ) {
                // If above conditions are true then we run the dfs from that cell
                dfs(newRow, newCol)
            }
        }
    }

    // Initially we pass our first cell such that it should be 1, which means visitable and also if it is not in the visited set
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                dfs(r, c)
            }
        }
    }

    return result
}

const grid = [[1, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 1], [1, 0, 0, 0]]

console.log(DFSOnGrid(grid))

// TC - Since we are visiting every row and col at least once so it is O(R * C)
// SC - We are creating the exact size of visited array as of grid so it is O(R * C)