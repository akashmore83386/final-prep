function medianFinder(nums) {
  // this question is similar to the kthSmallest element. We need to find our K in this problem, k will be the median.
  //   n = arr.length
  // Odd:  find kthSmallest at index → Math.floor(n/2)
  // Even: find kthSmallest at index → Math.floor(n/2) - 1  (lower middle)
  //       find kthSmallest at index → Math.floor(n/2)       (upper middle)
  //       then average both and Math.trunc()

  if (nums.length % 2 === 1) {
    // Odd: just find the middle index
    const targetIndex = Math.floor(nums.length / 2);
    return quickSelect(nums, 0, nums.length - 1, targetIndex);
  } else {
    // Even: find BOTH middle values using quickSelect, then average them
    const secondIndex = Math.floor(nums.length / 2);
    const firstIndex = secondIndex - 1;

    // Call quickSelect TWICE to get actual sorted values
    const firstValue = quickSelect(nums, 0, nums.length - 1, firstIndex);
    const secondValue = quickSelect(nums, 0, nums.length - 1, secondIndex);

    return Math.trunc((firstValue + secondValue) / 2);
  }
}

function quickSelect(nums, start, end, targetIndex) {
  if (start > end) return nums[start];
  const pivotIndex = partition(nums, start, end);

  if (pivotIndex > targetIndex) {
    return quickSelect(nums, start, pivotIndex - 1, targetIndex);
  } else if (pivotIndex < targetIndex) {
    return quickSelect(nums, pivotIndex + 1, end, targetIndex);
  } else {
    return nums[pivotIndex];
  }
}

function partition(nums, start, end) {
  let i = start;
  let j = start;
  let pivot = nums[end];

  while (i <= end) {
    if (nums[i] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j - 1;
}

console.log(medianFinder([-6, -1, -3, -2, -5, -4]));

// ⏱️ Complexity
// Odd case:

// Time: O(n) average — one quickSelect call
// Space: O(n) recursion stack worst case

// Even case:

// Time: O(2n) = O(n) — two quickSelect calls
// Space: O(n) recursion stack

// Never access nums[index] assuming it's sorted ❌
// Always use quickSelect to find the value at a sorted position ✅