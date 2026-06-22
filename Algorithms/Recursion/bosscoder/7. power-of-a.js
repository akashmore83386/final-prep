// a^b, suppose a = 2, b = 5
// ans = 2^5
// 2 * 2 * 2 * 2 * 2 = 32

function power(a, b) {
    if(b === 0) return 1

    return power(a, b - 1) * a
}

console.log(power(2, 5))

// expectation
// power(2, 5)
// 2 * 2 * 2 * 2 * 2
// = 32

// faith
// power(2, 4)
// 2 * 2 * 2 * 2
// = 16

// combine
// power(2, 5) {
//     return power(2, 4) * 2
// }

// generalise
// smallest possible valid input
// if(b === 0) return 1
