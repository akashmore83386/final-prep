// function solve(array) {
//     let result = 0

//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === "++X" || array[i] === "X++") {
//             result++
//         } else {
//             result--
//         }
//     }

//     return result
// }

// console.log(solve(["X++", "--X", "X++", "X++"]))

const fs = require('fs')

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/) // 1 ++X -> ["1", "++X"]

    const n = parseInt(input[0], 10)

    let result = 0

    for (let i = 1; i <= n; i++) {
        if (input[i] === "++X" || input[i] === "X++") {
            result++
        } else if(input[i] === "--X" || input[i] === "X--") {
            result--
        }
    }

    console.log(result)
}

solve()