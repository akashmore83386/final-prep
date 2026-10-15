const fs = require('fs')

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim()

    if (!input) return;

    const w = parseInt(input, 10)

    if (w > 2 && w % 2 === 0) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}

solve()