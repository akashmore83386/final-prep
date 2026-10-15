
// 1. Given n x n matrix 
// 2. Return the length of the shortest clear path (top left to bottom right) - 
// i. All the visited cells of the path are 0
// ii. All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

// Modify your directions array to include all 8 directions (diagonals included). When you push a node into the queue, push its current distance too: queue.push([row, col, distance]).


function shortestPathInBInaryMatrix(grid) {
    if (!grid || grid.length === 0) return -1

    let R = grid.length
    let C = grid[0].length

    // Remember only 0 is walkable, so 1 is not walkable, if it is starting from 1 or ending at 1 then we can return -1 
    if (grid[0][0] === 1 || grid[R - 1][C - 1] === 1) return -1

    // Below are the 8 directions, 4 main (top, right, down, left) and 4 diagonals (top-right, right-down, down-left, left-top)
    let directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],

        [-1, 1],
        [1, 1],
        [1, -1],
        [-1, -1]
    ]

    // Since we know that first cell will be walkable now (0), we added that in the queue initially and also the distance is 1
    const queue = [[0, 0, 1]]

    while (queue.length > 0) {
        const [SR, SC, D] = queue.shift()

        // We check below condition just to confirm if we reached the bottom right corner, if yes then in that case return the Distance
        if (SR === R - 1 && SC === C - 1) {
            return D
        }

        for (let [dr, dc] of directions) {
            let newRow = dr + SR
            let newCol = dc + SC

            if (newRow < R && newRow >= 0 &&
                newCol < C && newCol >= 0 &&
                grid[newRow][newCol] === 0
            ) {
                grid[newRow][newCol] = 1
                queue.push([newRow, newCol, D + 1])
            }
        }
    }

    return -1
}

// const grid = [
//     [1, 1, 0, 0], 
//     [0, 0, 1, 1], 
//     [1, 0, 1, 1], 
//     [1, 0, 0, 0]
// ]

const grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]

console.log("shortestPathInBInaryMatrix", shortestPathInBInaryMatrix(grid))