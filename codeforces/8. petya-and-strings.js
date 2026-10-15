const fs = require('fs');

function solve() {
    // Read all input from stdin and clean up whitespace/carriage returns
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\r?\n/);

    // Extract and convert both strings to lowercase
    const s1 = input[0].toLowerCase();
    const s2 = input[1].toLowerCase();

    // Compare and print the required output
    if (s1 < s2) {
        console.log("-1");
    } else if (s1 > s2) {
        console.log("1");
    } else {
        console.log("0");
    }
}

solve();