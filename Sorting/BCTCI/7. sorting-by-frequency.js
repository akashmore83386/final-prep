function sortingByFrequency(string) {
  const freqMap = new Map();

  for (let char of string) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const uniqueArray = Array.from(freqMap.keys());

  uniqueArray.sort((a, b) => {
    if (freqMap.get(a) !== freqMap.get(b)) {
      return freqMap.get(b) - freqMap.get(a);
    }

    return a < b ? -1 : 1;
  });

  return uniqueArray;
}

console.log(sortingByFrequency("supercalifragilisticexpialidocious"));