const fs = require('fs');

function solve() {
    // Read input from standard input (trimmed to remove trailing newlines/spaces)
    const input = fs.readFileSync(0, 'utf-8').trim();

    // Step 1: Split by '+' to get an array of number strings
    // Step 2: Sort them numerically in ascending order
    // Step 3: Join them back with '+'
    const result = input
        .split('+')
        .sort((a, b) => a - b)
        .join('+');

    console.log(result);
}

solve();