function kMostFrequent(nums, k) {
  // Step 1 - build frequency map
  const freqMap = new Map();

  for (const item of nums) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
  }

  // Step 2: get unique elements array
  const array = Array.from(freqMap.keys());

  const targetIndex = k - 1;

  // Step 3: quickselect on unique elements
  //         targetIndex = k - 1
  return quickSelect(array, 0, array.length - 1, targetIndex, freqMap, k);
}

function quickSelect(nums, start, end, targetIndex, freqMap, k) {
  if (start > end) return nums[start];
  const pivotIndex = partition(nums, start, end, freqMap);

  if (pivotIndex > targetIndex) {
    return quickSelect(nums, start, pivotIndex - 1, targetIndex, freqMap, k);
  } else if (pivotIndex < targetIndex) {
    return quickSelect(nums, pivotIndex + 1, end, targetIndex, freqMap, k);
  } else {
    return nums.slice(0, k);
  }
}

function partition(nums, start, end, freqMap) {
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

console.log(kMostFrequent([1, 2, 2, 3, 3, 3], 2)); // [3, 2]

// ⏱️ Complexity

// Time: O(n) build freqMap + O(n) quickselect = O(n)
// Space: O(n) for freqMap + unique elements array

// Kth Smallest  → compare raw VALUES      → return single value
// K Closest     → compare DISTANCES       → return slice
// K Frequent    → compare FREQUENCIES     → return slice
//                (flip to >= for largest)