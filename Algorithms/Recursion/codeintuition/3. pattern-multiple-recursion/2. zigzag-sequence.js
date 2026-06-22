function zigazagSequence(n) {
    if(n === 0) return 1
    if(n === 1) return 2
    if(n === 2) return 3

    return zigazagSequence(n - 1) - zigazagSequence(n - 2) + zigazagSequence(n - 3)
}

console.log(zigazagSequence(7))

// expectation
// zigzagSequence(N) will return the correct number for the Nth position.

// faith
// We need the three previous numbers, so we make THREE leaps of faith!
// We have FAITH that:
// 1. zigzagSequence(N - 1) will give us the 1st previous number.
// 2. zigzagSequence(N - 2) will give us the 2nd previous number.
// 3. zigzagSequence(N - 3) will give us the 3rd previous number.

// combine
// We glue our three faith results together using the problem's formula.
// return zigzagSequence(N - 1) - zigzagSequence(N - 2) + zigzagSequence(N - 3)

// generalise
// What are the absolute smallest valid inputs (our base cases)?
// The problem gives us these explicitly!
// if (N === 0) return 1;
// if (N === 1) return 2;
// if (N === 2) return 3;