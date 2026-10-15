const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/)

    if (!input || input.length === 0 || input[0] === '') return

    const n = parseInt(input[0], 10)

    for (let i = 1; i <= n; i++) {
        const word = input[i]

        let count = 0

        for (let j = 1; j < word.length - 1; j++) {
            count++
        }

        if (word.length > 10) {
            console.log(`${word[0] + `${count}` + `${word[word.length - 1]}`}`)
        } else {
            console.log(word)
        }

    }
}

solve()