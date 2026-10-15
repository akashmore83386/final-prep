// function solve(numberOfParticipants, kIndex, participantsScoreArray) {
//     let result = 0
//     const valueToCompare = participantsScoreArray[kIndex]

//     if (valueToCompare === 0) return 0

//     for (let i = 0; i < participantsScoreArray.length; i++) {
//         if (participantsScoreArray[i] >= valueToCompare) {
//             result++
//         }
//     }

//     return result
// }

// console.log(solve(8, 5, [10, 9, 8, 7, 7, 7, 5, 5]))

const fs = require('fs')

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/)

    const numberOfParticipants = parseInt(input[0], 10)

    const kthIndex = parseInt(input[1], 10)

    const kthScore = parseInt(input[kthIndex + 1], 10)

    let result = 0

    for (let i = 2; i <= numberOfParticipants + 1; i++) {
        const score = parseInt(input[i], 10)

        if (score > 0 && score >= kthScore) {
            result++
        }
    }

    console.log(result)
}

solve()