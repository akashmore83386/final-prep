class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freqMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
    }

    const targetIndex = k - 1;

    const uniqueArray = Array.from(freqMap.keys());

    return this.quickSelect(
      uniqueArray,
      0,
      uniqueArray.length - 1,
      targetIndex,
      freqMap,
      k,
    );
  }

  quickSelect(nums, start, end, targetIndex, freqMap, k) {
    if (start > end) return nums[start];

    const pivotIndex = this.partition(nums, start, end, freqMap);

    if (pivotIndex > targetIndex) {
      return this.quickSelect(
        nums,
        start,
        pivotIndex - 1,
        targetIndex,
        freqMap,
        k,
      );
    } else if (pivotIndex < targetIndex) {
      return this.quickSelect(
        nums,
        pivotIndex + 1,
        end,
        targetIndex,
        freqMap,
        k,
      );
    } else {
      return nums.slice(0, k);
    }
  }

  partition(nums, start, end, freqMap) {
    let i = start;
    let j = start;
    let pivot = nums[end];

    while (i <= end) {
      if (freqMap.get(nums[i]) >= freqMap.get(pivot)) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j++;
      } else {
        i++;
      }
    }

    return j - 1;
  }
}