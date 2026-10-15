/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    let R = grid1.length
    let C = grid2[0].length

    let visited = Array.from({ length: R }, () => Array(C).fill(false))

    let count = 0

    let directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    function dfs(r, c) {
        visited[r][c] = true
        let isSub = true

        // If the current land in grid2 is water in grid1, it ruins the sub-island status
        if (grid1[r][c] === 0) {
            isSub = false
        }

        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            // We only care about staying in bounds, not being visited, and being land in grid2
            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&
                !visited[newRow][newCol] &&
                grid2[newRow][newCol] === 1
            ) {
                // Force the DFS to run completely for this child cell
                let childIsSub = dfs(newRow, newCol)

                // If any part of the connected island is not a sub-island, update our flag
                if (!childIsSub) {
                    isSub = false
                }
            }
        }

        return isSub
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            // Find ANY unvisited land in grid2 to start exploring the island
            if (grid2[r][c] === 1 && !visited[r][c]) {
                // If the entire island exploration returns true, it's a valid sub-island!
                if (dfs(r, c)) {
                    count++
                }
            }
        }
    }

    return count
};