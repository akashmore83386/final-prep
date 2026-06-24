function kClosestElements(nums, k, target) {
  const targetIndex = k - 1;
  return quickSelect(nums, 0, nums.length - 1, targetIndex, target, k);
}

function quickSelect(nums, start, end, targetIndex, target, k) {
  if (start > end) return nums[start];
  const pivotIndex = partition(nums, start, end, target);

  if (pivotIndex > targetIndex) {
    return quickSelect(nums, start, pivotIndex - 1, targetIndex, target, k);
  } else if (pivotIndex < targetIndex) {
    return quickSelect(nums, pivotIndex + 1, end, targetIndex, target, k);
  } else {
    return nums.slice(0, k).sort((a, b) => a - b);
  }
}

function partition(nums, start, end, target) {
  let i = start;
  let j = start;
  let pivot = nums[end];

  while (i <= end) {
    if (Math.abs(nums[i] - target) <= Math.abs(pivot - target)) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j - 1;
}

console.log(kClosestElements([6, 7, 3, 1], 2, 3));

// ⏱️ Complexity

// Time: O(n) average — same as quickselect
// Space: O(n) recursion stack

// Original Quickselect:  compare raw values
// K Closest Quickselect: compare distances |x - target|

// Same exact algorithm — just ONE line changes in partition!

// TWO pointer approach -

var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  // Shrink the window until its size is exactly k
  while (right - left >= k) {
    // If the left element is further from x than the right element, move left pointer right
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      // If they are equal or right is further, move right pointer left
      // (Because the problem prefers smaller elements in case of a tie)
      right--;
    }
  }

  // Return the stable window
  return arr.slice(left, right + 1);
};

// Binary search approach -

var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - k; // The window cannot start beyond this index

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // Compare the element just before the window vs the element just after the window
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1; // Window needs to shift to the right
    } else {
      right = mid; // Window needs to shift to the left (or stay here)
    }
  }

  return arr.slice(left, left + k);
};