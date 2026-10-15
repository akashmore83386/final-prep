// function solve(m, n) {
//     return Math.floor((m * n) / 2)
// }

// console.log(solve(3, 3))

const fs = require('fs')

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/)

    const m = parseInt(input[0], 10)

    const n = parseInt(input[1], 10)

    console.log(Math.floor((m * n) / 2))
}

solve()