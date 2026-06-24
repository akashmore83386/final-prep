class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freqMap = new Map();

    for (let i = 0; i < s.length; i++) {
      freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
      if (!freqMap.has(t[i])) return false;

      freqMap.set(t[i], freqMap.get(t[i]) - 1);

      if (freqMap.get(t[i]) === 0) {
        freqMap.delete(t[i]);
      }
    }

    return freqMap.size === 0;
  }
}

// racecar
// {r: 2, a: 1, c: 2, e: 1}

// carrace
// !freqMap.has(c) -> false
// freqMap.get(c) -> freqMap.set(c, freqMap.get(c) - 1)
// if freqMap.get(c) === 0, freqMap.delete(c)

// At last freqMap.size === 0
