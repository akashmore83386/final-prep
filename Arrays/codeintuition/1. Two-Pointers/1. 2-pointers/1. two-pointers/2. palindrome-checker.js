// Given a string s, write a function that returns true if it is a palindrome or false otherwise.

// A palindrome is a string that reads the same forward and backward after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters. 

// Alphanumeric characters include letters and numbers - [a, z], [A, Z], [0, 9]
// Example 1
// Input: s = a man nam a
// Output: true
// Explanation amannama is a palindrome.
// Example 2
// Input: s = race car rac ecar
// Output: true
// Explanation racecarracecar is a palindrome.
// Example 3
// Input: s = This is codeintuition
// Output: false
// Explanation Thisiscodeintuition is not a palindrome.

// function solve(string) {
//     const cleaned = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
//     let reversed = ""

//     for(let i = cleaned.length - 1; i >= 0; i--) {
//         reversed += cleaned[i]
//     }

//     return cleaned === reversed
// }

function solve(string) { // s = a man nam a
    const cleaned = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') // s = amannama
    let left = 0
    let right = cleaned.length - 1

    while(left <= right) {
        if(cleaned[left] !== cleaned[right]) return false 

        left++
        right--
    }

    return true
}

console.log(solve("a man nacm a"))

// O(n)
// O(n)