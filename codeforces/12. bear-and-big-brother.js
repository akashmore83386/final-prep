// function solve(limakWeight, bobWeight) {
//     let yearsCounter = 0

//     while (limakWeight <= bobWeight) {
//         limakWeight = limakWeight * 3
//         bobWeight = bobWeight * 2
//         yearsCounter++
//     }

//     if (limakWeight > bobWeight) {
//         return yearsCounter
//     }
// }

// console.log(solve(1, 1))

const fs = require('fs')
function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(' ')
    let limakeWeight = parseInt(input[0], 10)
    let bobWeight = parseInt(input[1], 10)

    let yearsCounter = 0

    while (limakeWeight <= bobWeight) {
        limakeWeight = limakeWeight * 3
        bobWeight = bobWeight * 2
        yearsCounter++
    }

    if (limakeWeight > bobWeight) {
        console.log(yearsCounter)
    }
}

solve()