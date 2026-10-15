// Your Refactoring Checklist FROM BFS on grid:
// Remove the result array (you need an integer representing time, not a list of coordinates).

// Remove the outer nested for loop that calls bfs(r, c).

// Write a single nested for loop at the beginning to:

// Push all [r, c, 0] into the queue where the grid is 2.

// Count up freshCount where the grid is 1.

// Run your while(queue.length > 0) loop.

// In the neighbor-checking if statement, check if the neighbor is 1. If so, infect it, decrement freshCount, and push it to the queue with minutes + 1.

// Give it a try with these changes! How are you thinking of tracking the minutes—by adding it to the queue array, or by processing the queue level-by-level?

function rottingOranges(grid) {
    let R = grid.length
    let C = grid[0].length

    let time = 0

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]

    // First we need to push all the rotten oranges into the queue
    const queue = []

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0])
            }
        }
    }

    // Then since we have all the rotten oranges in the queue, we can also have the total fresh oranges Count
    let freshCount = 0

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1) {
                freshCount++
            }
        }
    }

    // Now we do have all the rotten oranges in the queue and also we have the fresh oranges count, now we can have our while loop:
    // 1. We remove the rotten orange from beginning from our queue
    // 2. We explore its neighbors, if the neigbor is 1 (fresh count), we make it infected by changing 1 to 2, and since it is infected we decrease the fresh orange count by 1
    // 3. We then push the neighbor in the queue with T being the T + 1 (total infected time + 1, because 1 minute needed to make it infected)
    // 4. At last whatever the max time will be our total infected time
    // We check if there are still fresh oranges which are not infected then we return -1 otherwise we return the time 

    while (queue.length > 0) {
        const [SR, SC, T] = queue.shift()

        for (let [dr, dc] of directions) {
            let newRow = dr + SR
            let newCol = dc + SC

            if (
                newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&
                grid[newRow][newCol] === 1
            ) {
                grid[newRow][newCol] = 2
                freshCount--
                queue.push([newRow, newCol, T + 1])
                time = Math.max(time, T + 1)
            }
        }
    }

    return freshCount > 0 ? -1 : time
}

// const grid = [
//     [1, 1, 0, 0], 
//     [0, 0, 1, 1], 
//     [1, 0, 1, 1], 
//     [1, 0, 0, 0]
// ]

const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]

console.log("rottingOranges", rottingOranges(grid))