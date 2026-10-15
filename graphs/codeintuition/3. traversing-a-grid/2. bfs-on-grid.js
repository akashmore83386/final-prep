// 3. Implementing Breadth-First Search (BFS) on a Grid

// BFS on a grid replaces the recursive call stack with an explicit Queue.
// The most important rule in Grid BFS is the same as Graph BFS: Mark the cell as visited the exact millisecond you push it into the queue. If you wait to mark it when you pop it out, your queue will fill up with duplicate coordinates and crash your browser memory.

// Here is the standard, reusable template for Grid BFS:

// We are getting a grid we need to run the BFS on the grid, modelling the grid as the graph, and we need to return the coordinates array

function BFSOnGrid(grid) {
    // we need the visited tracks
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false))

    // we need the result array which we will output
    const result = []

    // we need the directions array, up, right, down, left
    const directions = [
        [-1, 0], // up
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
    ]

    function bfs(startRow, startCol) {
        const queue = []
        // add the startRow, startCol in the queue
        queue.push([startRow, startCol])

        visited[startRow][startCol] = true;
        result.push([startRow, startCol]);

        while (queue.length > 0) {
            const [SR, SC] = queue.shift()

            // Now we need to move and check in the 4 directions for the current cell/node
            for (let [dr, dc] of directions) {
                const newRow = SR + dr
                const newCol = SC + dc

                // Check if newRow and newCol are in the bounds, check if the cell on the newRow and newCol is 1 and if it is not visited
                if (newRow >= 0 && newRow < grid.length &&
                    newCol >= 0 && newCol < grid[0].length &&
                    grid[newRow][newCol] === 1 &&
                    !visited[newRow][newCol]
                ) {
                    // Mark visited and push to result the exact moment it enters the queue
                    visited[newRow][newCol] = true
                    result.push([newRow, newCol])
                    queue.push([newRow, newCol])
                }
            }
        }
    }

    // Initially we need to add the valid cell which is 1 and not in the visited
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                bfs(r, c)
            }
        }
    }

    return result
}

const grid = [[1, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 1], [1, 0, 0, 0]]

console.log(BFSOnGrid(grid))

// TC - Since we are visiting every row and col at least once so it is O(R * C)
// SC - We are creating the exact size of visited array as of grid so it is O(R * C)