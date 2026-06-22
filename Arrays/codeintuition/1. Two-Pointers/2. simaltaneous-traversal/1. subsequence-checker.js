// Given two strings, s and t. Write a function that returns true if s is a subsequence of t, or false otherwise.

// A subsequence is a string created from another string by removing certain characters while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde," whereas "aec" is not.
// Example 1
// Input: s = abc, t = ahbgdc
// Output: true
// Explanation: abc is a subsequence of ahbgdc.
// Example 2
// Input: s = coin, t = codeintuition
// Output: true
// Explanation: coin is a subsequence of codeintuition.
// Example 3
// Input: s = abc, t = defghi
// Output: false
// Explanation: abc is not a subsequence of defghi.

function solve(s, t) {
  let index1 = 0;
  let index2 = 0;

  while (index1 < s.length && index2 < t.length) {
    if (s[index1] === t[index2]) {
      index1++;
    }
    index2++;
  }

  // If index1 reaches the end of s, it means all characters in s
  // are found in t in the same order
  return index1 === s.length;
}

console.log(solve("abc", "ahbgdc"));

// O(n)
// O(1)