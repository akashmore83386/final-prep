export class Solution {
    islandCount(grid) {
        if (!grid || grid.length === 0) return 0

        const R = grid.length
        const C = grid[0].length

        let visited = Array.from({ length: R }, () => Array(C).fill(false))

        let numberOfIslands = 0

        const directions = [
            [-1, 0], // up
            [0, 1], // right
            [1, 0], // down
            [0, -1], // left

            // up-right
            [-1, 1],

            // right-down
            [1, 1],

            // down-left
            [1, -1],

            // left-up
            [-1, -1]
        ]

        function dfs(r, c) {
            visited[r][c] = true

            for (let [dr, dc] of directions) {
                let newRow = r + dr
                let newCol = c + dc

                if (newRow >= 0 && newRow < R &&
                    newCol >= 0 && newCol < C &&

                    grid[newRow][newCol] === 1 &&

                    !visited[newRow][newCol]
                ) {
                    dfs(newRow, newCol)
                }
            }
        }

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (grid[r][c] === 1 && !visited[r][c]) {
                    numberOfIslands++
                    dfs(r, c)
                }
            }
        }

        return numberOfIslands
    }
}

const demo = new Solution()
const grid = [[1, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 1], [1, 0, 0, 0]]
console.log(demo.islandCount(grid))