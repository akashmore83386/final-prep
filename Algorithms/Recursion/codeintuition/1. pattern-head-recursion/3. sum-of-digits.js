function sumOfDigits(N) {
    if(N === 0) return 0

    const remainingDigit = Math.floor(N / 10)
    const lastDigit = N % 10

    return sumOfDigits(remainingDigit) + lastDigit
}

console.log(sumOfDigits(523))

// expectation
// sumOfDigits(523)
// 5 + 2 + 3 = 10

// faith
// sumOfDigits(52)
// 5 + 2 = 7

// combine
// sumOfDigits(523) {
//     return sumOfDigits(52) + 3 // we need to add the last digit, in first remaining digits, 523 % 10 = 3 (gives last digit), and 523 / 10 = 52 (rounded off gives, remaining digits)
// }

// generalise
// smallest possible valid input
// if the number becomes 0, its sum is 0