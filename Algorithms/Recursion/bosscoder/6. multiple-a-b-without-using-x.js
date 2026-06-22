function multiply(a, b) {
    if(b === 0) return 0

    return multiply(a, b - 1) + a
}

console.log(multiply(6, 4))

// expectation              faith                       combine
// multiply(6, 4)           multiply(6, 3)              multiply(6, 4) {
// 6 + 6 + 6 + 6            6 + 6 + 6                       return mupltiply(6, 3) + 6
// = 24                     = 18                        }

// generalise
// smallest valid input, it can be b = 0, if it is 0 then a will be 0
// if(b === 1) return 1