class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    // Brute force - We can use the nested loops, if both the values are same, then we return true since that contains the duplicate. TC - O(n^2), SC - O(1)

    // Better - Sort the array, then loop over the sorted array, from 0 to n - 1, and check arr[i] === arr[i + 1]

    // Optimal - We iterate over the nums array and push every element in the set,
    // which contains the unique numbers, so if we push duplicate number
    // And if that is already present in the set that means we found our first
    // duplicate

    // TC - O(n)
    // SC - O(1), YOU ARE WRONG!! ""IT IS O(N)!"" IN THE WORST SCENARIO, WHEN EVERY ARRAY ELEMENT IS UNIQUE, MY SEEN SET WILL GROW TO STORE EVERY SINGLE ELEMENT FROM ARRAY

    const seen = new Set();

    for (let i = 0; i < nums.length; i++) { // Actually we can use for of loop so that we don't add any unnecessary boilerplate
      if (seen.has(nums[i])) {
        return true;
      }

      seen.add(nums[i]);
    }

    return false;
  }
}

// [1, 2, 3, 3]