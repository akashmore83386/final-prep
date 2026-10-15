/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    if (!grid || grid.length === 0) return 0
    const R = grid.length
    const C = grid[0].length

    let visited = Array.from({ length: R }, () => Array(C).fill(false))

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    let result = 0

    function dfs(r, c) {
        visited[r][c] = true
        let maxSofar = grid[r][c]

        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&
                grid[newRow][newCol] > 0 &&
                !visited[newRow][newCol]
            ) {
                maxSofar += dfs(newRow, newCol)
            }
        }

        return maxSofar
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] > 0 && !visited[r][c]) {
                result = Math.max(result, dfs(r, c))
            }
        }
    }

    return result
};

// if cell is 0 then it is land
// if cell is > 0 it is water, that means fish is there

// fisher can start at any water cell, that means he can choose any cell which is > 0 and do the following operations
// 1. Catch all the fish at cell (r, c) or
// 2. Move to any  adjacent water cell

// We need to return maximum fish that a fisher can catch if he chooses his starting cell by his own, if the water cell don't exist we return 0

// Adjacent cells can be in 4 directions (top, right, down, left)

// We run our outer loop which will track the cell which is > 0 then for that cell we will apply the DFS so we can actually track it's neighbors if they are also > 0 which means water cell, and we will accumulate the values and at last return the maximum accumulator

// For example, we first get 2, inside the DFS function we will have max which will track the max water cells sum, and at the end of the dfs function our dfs will return maxSoFar.

// In the outer loop we will keep track of the maxSoFar on global scale