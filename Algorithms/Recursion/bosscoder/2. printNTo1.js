// we need to print the decreasing from n to 1
// So suppose if the n = 6, then 6, 5, 4, 3, 2, 1

function printNTo1(n) {
    if(n === 0) return

    console.log(n)
    printNTo1(n - 1)
}

console.log(printNTo1(6))