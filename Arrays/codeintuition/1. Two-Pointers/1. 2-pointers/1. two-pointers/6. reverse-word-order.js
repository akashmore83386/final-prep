// Given a string s, write a function that returns a string of words in reverse order concatenated by a single space. The words of the input string are separated by at least a single space. The string may contain leading or trailing white spaces or multiple spaces between two words. The returned string must only have one space between the words. Do not include any leading or trailing whitespaces.

// Example 1
// Input: s = This is a    string
// Output: string a is This
// Explanation: All the words of the given strings are concatenated in reverse order and separated by a single space.
// Example 2
// Input: s =    fizz buzz
// Output: buzz fizz
// Explanation: All the words of the given strings are concatenated in reverse order, and the leading and trailing white spaces are removed.
// Example 3
// Input: s = random
// Output: random
// Explanation: The string only contains one word, hence, the result is the same as the input string.

function solve(s) {
  const arr = s.trim().split(/\s+/);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join(" ");
}

console.log(solve("This is a    string"));

// O(n)
// O(1)