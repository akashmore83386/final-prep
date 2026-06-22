// Given a string s, write a function that reverses the words in the given string while preserving the original word order. The string may contain leading or trailing white spaces, and the words in the input string might be separated by more than a single space character.

// Example 1
// Input: s = This is a string
// Output: sihT si a gnirts
// Explanation: All the words of the given strings are reversed.
// Example 2
// Input: s = I love coding
// Output: I evol gnidoc
// Explanation: The words are separated by more than one space character.
// Example 3
// Input: s = random
// Output: modnar
// Explanation: The string only contains one word which is reversed.

function solve(s) {
  const arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split("");
    let left = 0;
    let right = word.length - 1;

    while (left <= right) {
      [word[left], word[right]] = [word[right], word[left]];

      left++;
      right--;
    }

    arr[i] = word.join("");
  }

  return arr.join(" ");
}

console.log(solve("This is a string"));

// O(n)
// O(n)