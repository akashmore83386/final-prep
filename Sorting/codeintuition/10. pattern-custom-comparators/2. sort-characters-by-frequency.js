// Given a string s that consists of lowercase and uppercase English alphabets, write a function that sorts the string in descending order of character frequency.

// If two characters have the same frequency, the one that is lexicographically smaller should come first.
// Example 1
// Input: s = eeeaaabc
// Output: aaaeeebc
// Explanation: Above is the string when sorted by the frequency of characters.
// Example 2
// Input: s = zzzxxyyyb
// Output: yyyzzzxxb
// Explanation: Above is the string when sorted by the frequency of characters.
// Example 3
// Input: s = zzzxxyyb
// Output: zzzxxyyb
// Explanation: The string is already sorted by the order of frequency.

// Approach -

// Step 1 → build freqMap from string s
//          (same as K Most Frequent Words!)

// Step 2 → get unique chars array, sort with custom comparator
//          primary:    higher frequency → first (descending)
//          tiebreaker: lexicographically smaller → first

// Step 3 → reconstruct string
//          each char.repeat(freqMap.get(char))
//          join everything together

function sortByFrequency(s) {
  // Step 1: freqMap
  const freqMap = new Map();

  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  // Step 2: sort unique chars
  const uniqueCharsArray = Array.from(freqMap.keys());

  uniqueCharsArray.sort((a, b) => {
    if (freqMap.get(a) !== freqMap.get(b)) {
      return freqMap.get(b) - freqMap.get(a);
    }

    return a < b ? -1 : 1; //
    // a < b → -1 → negative → a comes first
    // a > b →  1 → positive → b comes first
  });

  // Step 3: reconstruct string using .repeat()
  let string = "";
  for (let char of uniqueCharsArray) {
    string += char.repeat(freqMap.get(char));
  }

  return string;
}

console.log(sortByFrequency("eeeaaabc")); // "aaaeeebc
console.log(sortByFrequency("zzzxxyyyb")); // "yyyzzzxxb

// Time:  O(n) build freqMap + O(k log k) sort unique chars
//        k = unique characters (max 52 for a-z, A-Z)
//        So effectively O(n)!

// Space: O(k) for freqMap and uniqueCharsArray