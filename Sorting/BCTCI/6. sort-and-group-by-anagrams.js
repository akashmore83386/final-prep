// Given a list of words, sort them grouped by their anagrams

// ['eat', 'tea', 'ate', 'nat', 'bat']
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

function sortAndGroupedByAnagrams(words) {
  // Okay so I will need to sort the words by their anagrams
  // 'eat', 'tea', 'ate' - group them
  // 'tan', 'nat' - group them
  // 'bat' - group them

  // once all the groups words are there I return it

  // I need to sort every word and then use that as the key, so this key will hold all value array in my hashmap

  // [
  //     'aet': ['eat', 'tea', 'ate'],
  //     'ant': ['tan', 'nat'],
  //     'abt': ['bat']
  // ]

  // So I will be using the map to group the words, based on the anagram, I will be pushing the word based on the sorted key

  // TC - O(n * m log n) // n = max word length, m = max word length
  // SC - O(n * m) // we are storing the n words and m characters of n words, basically we are storing all the words and its characters

  const map = new Map();

  for (let word of words) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    } else {
      map.get(key).push(word);
    }
  }

  console.log(map);
  return Array.from(map.values());
}

console.log(
  sortAndGroupedByAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
);

// The same code can be used for the leetcode group anagrams problem