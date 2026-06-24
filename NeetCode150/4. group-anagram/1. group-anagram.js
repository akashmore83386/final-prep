class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
      const key = strs[i].split("").sort().join("");

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(strs[i]);
    }

    return Array.from(map.values());
  }
}

// strs = ["act","pots","tops","cat","stop","hat"]
// [["act", "cat"], ["pots", "stop", "tops"], "hats"]

// We can loop over each string, and sort it, we can store this sorted
// key as the key for the key, and we can push every sorted string as the value
// So if the sorted string is already there that means we can add this new same string in the array of that sorted string
// If this sorted string is not there then we create an array entry!

// {"act": ["act", ""]}