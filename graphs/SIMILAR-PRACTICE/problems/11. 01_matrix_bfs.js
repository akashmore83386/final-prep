function zeroOneMatrix(mat) {
    let R = mat.length
    let C = mat[0].length

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    const queue = []

    // 1. push all zeros into the queue
    // 2. Mark all 1s as Infinity (meaning unvisited)
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c, 0])
            } else {
                mat[r][c] = Infinity
            }
        }
    }

    while (queue.length > 0) {
        const [SR, SC, D] = queue.shift()

        for (let [dr, dc] of directions) {
            let newRow = dr + SR
            let newCol = dc + SC

            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&
                mat[newRow][newCol] === Infinity
            ) {
                mat[newRow][newCol] = D + 1
                queue.push([newRow, newCol, D + 1])
            }
        }
    }

    return mat
}

const grid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
console.log("zeroOneMatrix", zeroOneMatrix(grid))