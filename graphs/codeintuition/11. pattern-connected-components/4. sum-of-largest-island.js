export class Solution {
    sizeOfLargestIsland(grid) {
        if (!grid || grid.length === 0) return 0

        let R = grid.length
        let C = grid[0].length

        let visited = Array.from({ length: R }, () => Array(C).fill(false))

        let sizeOfLargestIsland = 0

        const directions = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],

            [-1, 1],
            [1, 1],
            [1, -1],
            [-1, -1]
        ]

        function dfs(r, c) {
            visited[r][c] = true
            let numberOfCellVisited = 1

            for (let [dr, dc] of directions) {
                let newRow = r + dr
                let newCol = c + dc

                if (newRow >= 0 && newRow < R &&
                    newCol >= 0 && newCol < C &&

                    grid[newRow][newCol] === 1 &&

                    !visited[newRow][newCol]
                ) {
                    numberOfCellVisited += dfs(newRow, newCol)
                }
            }

            return numberOfCellVisited
        }

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (grid[r][c] === 1 && !visited[r][c]) {
                    sizeOfLargestIsland = Math.max(sizeOfLargestIsland, dfs(r, c))
                }
            }
        }

        return sizeOfLargestIsland
    }
}

const demo = new Solution()
const grid = [[1, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 1], [1, 0, 0, 0]]
console.log(demo.sizeOfLargestIsland(grid))