// Given a string s, write a function to reverse the vowels in the string and return the updated string.

// For this problem, consider only the vowels in the English alphabet: a, e, i, o, u, including both uppercase and lowercase forms.
// Example 1
// Input: s = random
// Output: rondam
// Explanation: The vowels 'a' and 'o' from the word "random" have been reversed.
// Example 2
// Input: s = afegijoku
// Output: ufogijeka
// Explanation: The vowels are swapped as shown below:
// 'a' is swapped with 'u'
// 'e' is swapped with 'o'
// Example 3
// Input: s = bcdf
// Output: bcdf
// Explanation: There are no vowels, so the string remains as it is.

function solve(s) {
  let left = 0;
  let right = s.length - 1;
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]); // O(1) because storing the fix inputs, doesn't grow
  const arr = s.split(""); // split the string into array

  while (left < right) {
    while (left < right && !set.has(arr[left])) left++; // move left pointer until it hits the vowel
    while (left < right && !set.has(arr[right])) right--; // move right pointer until it hits the vowel

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // once we have the both pointers on the vowel swap them

      left++; // after swapping move left
      right--; // after swapping move right
    }
  }

  return arr.join(""); // return the ans as string
}

console.log(solve("random"));

// O(n)
// O(1)