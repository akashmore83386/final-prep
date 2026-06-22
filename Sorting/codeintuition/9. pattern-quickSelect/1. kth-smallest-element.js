function kthSmallest(nums, k) {
  const targetIndex = k - 1;

  return quickSelect(nums, 0, nums.length - 1, targetIndex);
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
  const pivot = nums[end];

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
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));

// TC - O(n) average, each round we throw away half
// Worst case - O(n^2), bad pivot every time (rare with random pivot)

// Quickselect = Partition + only recurse on ONE side
//                               ↑
//                     this is the entire trick