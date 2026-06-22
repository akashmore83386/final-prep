// expectation
// climbStairs(3, [1, 2, 3])
// (1, 1, 1)
// (1, 2)
// (2, 1)
// (3)

// total number of ways to climb 3 steps are 4

function climbStairs(n, steps) {
    if(n === 0) return 1

    if(n < 1) return 0

    let uniqueSteps = [...new Set(steps)]

    let totalWays = 0

    for(let step of uniqueSteps) {
        totalWays += climbStairs(n - step, uniqueSteps)
    }

    return totalWays
}

console.log(climbStairs(3, [1, 2, 3]));

// faith
// if we are at ground at climb 1 step then we are left with the 2 stairs, N - 1
// so climbStairs(2, steps), suppose it gives us all the ways to finish the climb

// BUT what if we took the jump of size '2' first? Then we have 1 stair left, N - 2
// so climbStairs(1, steps), suppose it gives us all the ways to finish the climb

// combine
// To get the total ways from the bottom we need to try EVERY allowed step size
// Make our faith call for the remaining stairs and add all those answres together

// let totalWays = 0
// for(let step of steps) {
//     totalWays += climbStairs(N - step, steps)
// }

// return totalWays

// generalise
// when do we stop? We have two scenarios here:
// 1. Success: We perfectly land on the top stair (N === 0). That counts as 1 successfull path
// if(N === 0) return 1

// 2. failure: We took a jump that was too big and overshot the stairs (N < 0). That counts 0 successfull path.