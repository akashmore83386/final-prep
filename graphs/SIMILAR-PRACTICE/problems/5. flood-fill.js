/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    if (!image || image.length === 0) return []

    const R = image.length
    const C = image[0].length

    let visited = Array.from({ length: R }, () => Array(C).fill(false))

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    let originalPixel = image[sr][sc]

    function dfs(r, c) {
        visited[r][c] = true
        image[r][c] = color

        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&

                image[newRow][newCol] === originalPixel &&

                !visited[newRow][newCol]
            ) {
                dfs(newRow, newCol)
            }
        }
    }

    dfs(sr, sc)

    return image
};