// we are given a number we need to return the fibonacci number of it

// Fibonnaci series is means first 2 terms are defined, 0, 1, then we have the series by previous 2 nums, so fib series is like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
                         // 0  1  2  3  4  5  6   7   8   9
// So if we are given the question to define define 2nd fib then ans will be 1, if we are given n = 6 then ans will be 8 and so on

function fib(n) {
    if(n <= 1) return n

    return fib(n - 2) + fib(n - 1)
}

console.log(fib(3))

// expectation
// fib(3)
// 2

// faith
// fib(2) // we have faith that n - 1 gives us the result for prev number
// fib(1) // we have faith that n - 2 gives us the result for prev to prev number

// combine
// fib(3) {
    // return fib(2) + fib(1)
// }

// generalise
// what are the smallest possible inputs?
// if n === 0 return 0
// if n === 1 return 1
// combined if (n <= 1) return n