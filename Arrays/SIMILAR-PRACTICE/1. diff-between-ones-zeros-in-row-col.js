// You are given a 0-indexed m x n binary matrix grid.

// A 0-indexed m x n difference matrix diff is created with the following procedure:

// Let the number of ones in the ith row be onesRowi.
// Let the number of ones in the jth column be onesColj.
// Let the number of zeros in the ith row be zerosRowi.
// Let the number of zeros in the jth column be zerosColj.
// diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
// Return the difference matrix diff.

// Input: grid = [[0,1,1],[1,0,1],[0,0,1]]
// Output: [[0,0,4],[0,0,4],[-2,-2,2]]

// 0 1 1 -> 0 0 4
// 1 0 1
// 0 0 1

// onesRow = [2, 2, 1]
// onesCol = [1, 1, 3]

// zeroeRow = [1, 1, 2]
// zeroeCol = [2, 2, 0]

// diff[0][0] = onesRow[0] + onesCol[0] - zerosRow[0] - zeroesCol[0] = 2 + 1 - 1 - 2 = 0
// diff[0][1] = onesRow[0] + onesCol[1] - zerosRow[0] - zeroesCol[1] = 2 + 1 - 1 - 2 = 0
// diff[0][2] = onesRow[0] + onesCol[2] - zerosRow[0] - zeroesCol[2] = 2 + 3 - 1 - 0 = 4

function solve(grid) {
    const n = grid.length
    const m = grid[0].length

    const result = Array.from({ length: n }, () => Array(m).fill(0));

    const onesRow = new Array(n).fill(0)
    const onesCol = new Array(m).fill(0)

    const zeroeRow = new Array(n).fill(0)
    const zeroeCol = new Array(m).fill(0)

    // fill onesRow and onesCol
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) {
                onesRow[i]++
                onesCol[j]++
            }
        }
    }

    // fill zerosRow and zerosCol
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 0) {
                zeroeRow[i]++
                zeroeCol[j]++
            }
        }
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            const diff = onesRow[i] + onesCol[j] - zeroeRow[i] - zeroeCol[j]
            result[i][j] = diff
        }
    }

    return result
}

console.log(solve([[0,1,1],[1,0,1],[0,0,1]]))