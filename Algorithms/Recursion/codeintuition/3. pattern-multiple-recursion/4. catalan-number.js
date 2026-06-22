// expectation
// Given N = 5
// catalanNumber(5) will return 42.

// faith
// To find the 5th number, we need ALL the Catalan numbers that came before it (0 through 4).
// We have FAITH that catalanNumber(i) will give us the left part of the equation.
// We have FAITH that catalanNumber(N - 1 - i) will give us the right part of the equation.

// combine
// Look at the explanation for N = 5: (C0 * C4) + (C1 * C3) + (C2 * C2) + (C3 * C1) + (C4 * C0)
// We need a loop where 'i' goes from 0 up to N - 1.
// Inside the loop, we multiply our two faith calls together, and add the result to a running total!
//
// let total = 0;
// for (let i = 0; i < N; i++) {
//     total += catalanNumber(i) * catalanNumber(N - 1 - i);
// }
// return total;

// generalise
// What is the absolute smallest valid input?
// The problem explicitly tells us: If N = 0, the answer is 1.
// if (N === 0) return 1;

export class Solution {
    catalanNumber(N) {
        // Generalise (Base Case)
        // The problem explicitly states C(0) = 1
        if (N === 0) {
            return 1;
        }

        let total = 0;

        // Faith & Combine
        // Loop 'i' from 0 up to strictly less than N
        for (let i = 0; i < N; i++) {
            // Multiply the two recursive branches and add to the total
            let leftPart = this.catalanNumber(i);
            let rightPart = this.catalanNumber(N - 1 - i);
            
            total += (leftPart * rightPart);
        }

        return total;
    }
}