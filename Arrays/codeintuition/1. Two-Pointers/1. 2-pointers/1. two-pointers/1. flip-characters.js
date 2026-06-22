// Given an array of characters arr, write a function that reverses the given array by swapping equidistant elements from the start and the end.

// Your function must do it by modifying the input string in-place i.e you must do it in O(1) space complexity. 
// Example 1
// Input: arr = [a, e, i, o, u]
// Output: [u, o, i, e, a]
// Explanation: Above is the reversed array.
// Example 2
// Input: arr = [a, b, c, d, e]
// Output: [e, d, c, b, a]
// Explanation: Above is the reversed array.
// Example 3
// Input: arr = []
// Output: []
// Explanation: Above is the reversed array.

function solve(arr) {
    // return arr.reverse()
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]

        left++
        right--
    }

    return arr
}

console.log(solve(["a", "e", "i", "o", "u"]))

// O(n)
// O(1)