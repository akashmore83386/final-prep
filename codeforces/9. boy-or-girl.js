// function solve(string) {
//     const seen = new Set()

//     let count = 0

//     for (let i = 0; i < string.length; i++) {
//         if (!seen.has(string[i])) {
//             count++
//         }

//         seen.add(string[i])
//     }

//     if (count % 2 === 0) {
//         console.log("Chat with her!")
//     } else {
//         console.log("Ignore him!")
//     }
// }

// console.log(solve("sevenkplus"))

const fs = require('fs')

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim()

    const seen = new Set()

    let count = 0

    for (let i = 0; i < input.length; i++) {
        if (!seen.has(input[i])) {
            count++
        }

        seen.add(input[i])
    }

    if (count % 2 === 0) {
        console.log("CHAT WITH HER!")
    } else {
        console.log("IGNORE HIM!")
    }
}

solve()