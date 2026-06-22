var topKFrequent = function (words, k) {
  // building the freqMap for words
  const freqMap = new Map();

  for (let word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  // get unique words array
  const array = Array.from(freqMap.keys());
  console.log(array);

  const targetIndex = k - 1;

  return quickSelect(array, 0, array.length - 1, targetIndex, freqMap, k);
};

function quickSelect(words, start, end, targetIndex, freqMap, k) {
  if (start > end) return [];

  const pivotIndex = partition(words, start, end, freqMap);

  if (pivotIndex > targetIndex) {
    return quickSelect(words, start, pivotIndex - 1, targetIndex, freqMap, k);
  } else if (pivotIndex < targetIndex) {
    return quickSelect(words, pivotIndex + 1, end, targetIndex, freqMap, k);
  } else {
    // THE FIX: Sort the final top k elements before returning
    const topK = words.slice(0, k);
    return topK.sort((a, b) => {
      const freqA = freqMap.get(a);
      const freqB = freqMap.get(b);

      if (freqA === freqB) {
        // Lexicographical sort for ties
        return a < b ? -1 : a > b ? 1 : 0;
      }
      // Frequency sort (descending)
      return freqB - freqA;
    });
  }
}

function partition(words, start, end, freqMap) {
  let i = start;
  let j = start;

  let pivot = words[end];

  while (i <= end) {
    if (
      freqMap.get(words[i]) > freqMap.get(pivot) ||
      (freqMap.get(words[i]) === freqMap.get(pivot) && words[i] <= pivot)
    ) {
      [words[i], words[j]] = [words[j], words[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j - 1;
}

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
