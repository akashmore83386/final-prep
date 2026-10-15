// function solve(matrix) {
//     let result = 0

//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix[i].length; j++) {
//             if(matrix[i][j] === 1) {
//                 // because the loop is 0 index we need to calculate the center position using 2, 2 not 3, 3!
//                 result = Math.abs(i - 2) + Math.abs(j - 2)
//             }
//         }
//     }

//     return result
// }

// const matrix = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
// ]

// console.log(solve(matrix))

const fs = require('fs')

// Approach 1
function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split('\n')

    let result = 0

    for (let i = 0; i < 5; i++) {
        const row = input[i].trim().split(/\s+/).map(Number)

        for (let j = 0; j < 5; j++) {
            if (row[j] === 1) {
                result = Math.abs(i - 2) + Math.abs(j - 2)
            }
        }
    }

    console.log(result)
}

// Approach 2
// function solve() {
//     const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)

//     const idx = input.indexOf(1)

//     const row = Math.floor(idx / 5)

//     const col = idx % 5

//     let result = 0

//     result = Math.abs(row - 2) + Math.abs(col - 2)

//     console.log(result)
// }

solve()