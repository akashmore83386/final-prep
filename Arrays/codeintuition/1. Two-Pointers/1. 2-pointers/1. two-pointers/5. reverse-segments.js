// Given a string s and an integer k, write a function that reverses k characters of the string for every 2k characters from the start of the string and returns the new string.

// You must abide by the following constraints:

// If there are fewer than k characters left, reverse them all.
// If there are at least k but fewer than 2k characters left, reverse only the first k characters and leave the rest untouched.
// Example 1
// Input: s = abcdefghij, k = 2
// Output: bacdfeghji
// Explanation:
// The first 2k characters are abcd
// The first k characters are reversed: ab = ba
// The next 2k characters are efgh
// The first k characters are reversed: ef = fe
// There are k characters (ij) left now, and since this number is less than 2k we reverse the first k characters to get: ji
// Example 2
// Input: s = dfgh, k = 5
// Output: hgfd
// Explanation:
// There are less than k characters left, so we reverse them all
// Example 3
// Input: s = qwerty, k = 3
// Output: ewqrty
// Explanation:
// The first k characters are reversed: qwe = ewq
// The remaining characters are left unchanged

function solve(s, k) {
  const arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

console.log(solve("abcdefghij", 2));
