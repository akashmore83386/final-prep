// 1. BST traversal
function BFSTraversal(adjList) {
    let result = []
    let visited = new Set()

    for (let i = 0; i < adjList.length; i++) {
        let startNode = i

        if (!visited.has(startNode)) {
            const queue = [startNode]
            visited.add(startNode)

            while (queue.length > 0) {
                const curr = queue.shift()
                result.push(curr)

                for (let neighbor of adjList[curr] || []) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor)
                        queue.push(neighbor)
                    }
                }
            }
        }
    }

    return result
}

// 2. DFS traversal
function DFSTraversal(adjList) {
    const result = []
    const visited = new Set()

    function dfs(node) {
        visited.add(Number(node))
        result.push(node)

        for (let neighbor of adjList[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor)
            }
        }
    }

    for (let key = 0; key < adjList.length; key++) {
        let curr = Number(key)

        if (!visited.has(curr)) {
            dfs(key)
        }
    }

    return result
}

// 3. Traversing a grid - DFS
// A value of `1` in a cell means the cell can be visited.
// A value of `0` in a cell means the cell cannot be visited.

// You can only move in the four cardinal directions, i.e., `up`, `right`, `down`, and `left`.
// When exploring neighbouring cells, you must follow this exact order: `up` → `right` → `down` → `left`.
function DFSOnGRID(grid) {
    // edge case if the grid is empty then return []
    if (!grid || grid.length === 0) return []

    const R = grid.length
    const C = grid[0].length

    // Track visited sets using 2D boolean array
    const visited = Array.from({ length: R }, () => Array(C).fill(false))

    // we need the result as final output of coordinates
    const result = []

    // directions to move (up, right, down, left)
    const directions = [
        [-1, 0], // up
        [0, 1], // right 
        [1, 0], // down
        [0, -1] // left
    ]

    // Now we can have our main DFS function, which is going to take the coordinates, R, C
    function dfs(r, c) {
        // as soon as we get that cell which has 1 in grid and not visited, from our outer loop, we need to make it mark it as visited and  also push that coordinates in result
        visited[r][c] = true
        result.push([r, c])

        // Now need to check the neighbors for that cell
        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            // Now we need to check if:
            // 1. Our newRow and newCol are within the bounds
            // 2. We also need to check if the cell on that is 1
            // 3. We also need to check if the cell is not visited previously
            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&

                grid[newRow][newCol] === 1 &&

                !visited[newRow][newCol]
            ) {
                dfs(newRow, newCol)
            }
        }
    }

    // outer loop iterates through the entire grid, finding and traversing every disconnected island of 1s
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                dfs(r, c)
            }
        }
    }

    return result
}

// 4. Traversing a grid - BFS
// A value of `1` in a cell means the cell can be visited.
// A value of `0` in a cell means the cell cannot be visited.

// You can only move in the four cardinal directions, i.e., `up`, `right`, `down`, and `left`.
// When exploring neighbouring cells, you must follow this exact order: `up` → `right` → `down` → `left`.
function bfsOnGrid(grid) {
    // edge case if the grid is empty then return []
    if (!grid || grid.length === 0) return []

    const R = grid.length
    const C = grid[0].length

    // Track visited sets using 2D boolean array
    const visited = Array.from({ length: R }, () => Array(C).fill(false))

    // we need the result as final output of coordinates
    const result = []

    // directions to move (up, right, down, left)
    const directions = [
        [-1, 0], // up
        [0, 1], // right 
        [1, 0], // down
        [0, -1] // left
    ]

    function bfs(startRow, startCol) {
        const queue = []

        queue.push([startRow, startCol])
        visited[startRow][startCol] = true
        result.push([startRow, startCol])

        while (queue.length > 0) {
            const [SR, SC] = queue.shift()

            for (let [dr, dc] of directions) {
                let newRow = SR + dr
                let newCol = SC + dc

                if (newRow >= 0 && newRow < R &&
                    newCol >= 0 && newCol < C &&


                    grid[newRow][newCol] === 1 &&

                    !visited[newRow][newCol]
                ) {
                    visited[newRow][newCol] = true
                    result.push([newRow, newCol])
                    queue.push([newRow, newCol])
                }
            }
        }
    }

    // outer loop iterates through the entire grid, finding and traversing every disconnected island of 1s
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                bfs(r, c)
            }
        }
    }

    return result
}

// 5. Number of Islands (DFSonGRID)
function numberOfIslands(grid) {
    // edge case if the grid is empty then return []
    if (!grid || grid.length === 0) return []

    const R = grid.length
    const C = grid[0].length

    // Track visited sets using 2D boolean array
    const visited = Array.from({ length: R }, () => Array(C).fill(false))

    let islands = 0

    // directions to move (up, right, down, left)
    const directions = [
        [-1, 0], // up
        [0, 1], // right 
        [1, 0], // down
        [0, -1] // left
    ]

    // Now we can have our main DFS function, which is going to take the coordinates, R, C
    function dfs(r, c) {
        // as soon as we get that cell which has 1 in grid and not visited, from our outer loop, we need to make it mark it as visited and  also push that coordinates in result
        visited[r][c] = true

        // Now need to check the neighbors for that cell
        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            // Now we need to check if:
            // 1. Our newRow and newCol are within the bounds
            // 2. We also need to check if the cell on that is 1
            // 3. We also need to check if the cell is not visited previously
            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&

                grid[newRow][newCol] === 1 &&

                !visited[newRow][newCol]
            ) {
                dfs(newRow, newCol)
            }
        }
    }

    // outer loop iterates through the entire grid, finding and traversing every disconnected island of 1s
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                islands++
                dfs(r, c)
            }
        }
    }

    return islands
}

// 6. maxArea of Islands (DFSonGRID)
function maxAreaOfIsland(grid) {
    const R = grid.length
    const C = grid[0].length

    let visited = Array.from({ length: R }, () => Array(C).fill(false))

    let maxArea = 0

    const directions = [
        [-1, 0], // up
        [0, 1], // right
        [1, 0], // down
        [0, -1] // left
    ]

    function dfs(r, c) {
        visited[r][c] = true
        let numberOfCellsVisited = 1

        for (let [dr, dc] of directions) {
            let newRow = r + dr
            let newCol = c + dc

            if (newRow >= 0 && newRow < R &&
                newCol >= 0 && newCol < C &&

                grid[newRow][newCol] === 1 &&

                !visited[newRow][newCol]
            ) {
                numberOfCellsVisited = numberOfCellsVisited + dfs(newRow, newCol)
            }
        }

        return numberOfCellsVisited
    }

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1 && !visited[r][c]) {
                maxArea = Math.max(maxArea, dfs(r, c))
            }
        }
    }

    return maxArea
}

function floodFill(image, sr, sc, color) {
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
}

const grid = [
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 0]
]

const graph = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]]
console.log("BFS", BFSTraversal(graph))
console.log("DFS", DFSTraversal(graph))
console.log("DFSOnGRID", DFSOnGRID(grid))
console.log("bfsOnGrid", bfsOnGrid(grid))
console.log("numberOfIslands", numberOfIslands(grid))
console.log("maxAreaOfIslands", maxAreaOfIsland(grid))
console.log("floodFill", floodFill(grid, 1, 1, 2))