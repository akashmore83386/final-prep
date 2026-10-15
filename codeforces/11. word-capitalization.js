// function solve(word) {
//     const firstLetter = word[0].toUpperCase()

//     let otherLetters = ''

//     for (let i = 1; i < word.length; i++) {
//         otherLetters += word[i]
//     }

//     console.log(firstLetter + otherLetters)
// }

// console.log(solve("ApPLe"))

const fs = require('fs')
function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim()

    const firstLetterWithCapitalization = input[0].toUpperCase()

    let otherLetters = ''

    for (let i = 1; i < input.length; i++) {
        otherLetters += input[i]
    }

    console.log(firstLetterWithCapitalization + otherLetters)
}

solve()