const fs = require('fs')

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split('\n')
    if (input.length === 0 || input[0] === '') return

    const numberOfProblems = parseInt(input[0], 10)

    let result = 0

    for (let i = 1; i <= numberOfProblems; i++) {
        const singleLine = input[i].trim().split(/\s+/).map(Number) // 1 0 0 -> [1, 0, 0]

        let opinionCount = 0

        for (let j = 0; j < singleLine.length; j++) {
            if (singleLine[j] === 1) {
                opinionCount++
            }
        }

        if (opinionCount >= 2) {
            result++
        }
    }

    console.log(result)
}

solve()