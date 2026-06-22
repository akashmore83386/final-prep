// Given an array of n positive integers and a number k. Find the minimum number of swaps required to bring all the numbers less than or equal to k together.

// Input: arr[] = {2, 1, 5, 6, 3}, k = 3
// Output: 1
// Explanation: To bring elements 2, 1, 3 together, swap element ‘5’ with ‘3’ such that final array will be arr[] = {2, 1, 3, 6, 5}

// Input: arr[] = {2, 7, 9, 5, 8, 7, 4}, k = 5
// Output: 2

// Constraints:
// 1<=N<=105
// 1<=A[i], K<=105

// Given an array of n positive integers and a number k. 
// Find the minimum number of swaps required to bring all the numbers less than or equal to k together.

function solve(array, k) {
    // count total good elements
    let goodCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= k) {
            goodCount++
        }
    }

    // now we have our window size which is goodCount, now check the first window
    let goodInWindow = 0
    for (let i = 0; i < goodCount; i++) {
        if (array[i] <= k) {
            goodInWindow++
        }
    }

    let maxGoodInWindow = goodInWindow

    // slide the window and keep tracking
    for (let i = goodCount; i < array.length; i++) {
        // remove the left element
        if (array[i - goodCount] <= k) {
            goodInWindow--
        }

        // add the right element
        if (array[i] <= k) {
            goodInWindow++
        }
        maxGoodInWindow = Math.max(maxGoodInWindow, goodInWindow)
    }

    // calculate the minimum swaps
    return goodCount - maxGoodInWindow
}

console.log(solve([2, 7, 1, 9, 3, 8, 5], 5))

// Note - Formula - Swaps needed in a window = Window size - Good numbers already in windowc

// O(n)
// O(1)