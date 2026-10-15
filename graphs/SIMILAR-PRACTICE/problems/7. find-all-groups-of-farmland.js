/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    let R = land.length
    let C = land[0].length

    let visited = Array.from({ length: R }, () => Array(C).fill(false))

    let result = []

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    let maxRow = 0
    let maxCol = 0

    function dfs(r, c) {
        visited[r][c] = true

        // update the max row and col encountered
        maxRow = Math.max(maxRow, r)
        maxCol = Math.max(maxCol, c)

        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&
                land[newRow][newCol] === 1 &&
                !visited[newRow][newCol]
            ) {
                dfs(newRow, newCol)
            }
        }
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (land[r][c] === 1 && !visited[r][c]) {
                // we found the top left corner (r1, c1)

                // Reset maxRow and maxCol for this new group
                maxRow = r
                maxCol = c

                // Run DFS to explore the whole farmland and update the maxRow and maxCol
                dfs(r, c)

                // push [r1, c1, r2, c2]
                result.push([r, c, maxRow, maxCol])
            }
        }
    }

    return result
};

// 0 -> hectare of forest land
// 1 -> hectare of farm land

// we have rectangular areas of hectares that consist entirely farmland (1's rectangular), these are called groups

// land (cell) can be represented by coordinates, where top left corner of land (cell) is (0, 0) and bottom right corner of land is (m - 1, n - 1)

// we need to find out the top left corner and bottom right corner of each farmland group and return their cordinates, so that will be [r1, c1, r2, c2]

// So we run our outer loop and check the cell which has 1 (farmland), we call our dfs from that, inside the DFS function we check it's adjacent cells in 4 directions to check if another farmland (1) is there, if yes then we recursively call DFS on those adjacent cells, Crucially as we traverse we need to do two things.

// I already know the top left corner, but for the bottom right corner, we need to find that out, when we add 1 (farmland) in the DFS we already know the [r1, c1] (top left corner) but inside the DFS function our main task is to find out the bottom right corner. Because the farmland is rectangle. [r2] will be the maximum row index that I encounter and [c2] will be the maximum col index that I encounter during that specific DFS run