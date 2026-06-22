// [3, 2, 4, 1], k = 1

// TC - O(n log n)
function kthSmallestElement(array, k) {
  array.sort((a, b) => a - b);

  return array[k - 1];
}

console.log(kthSmallestElement([3, 2, 4, 1, 9], 5));

// optimal
// [2, 3, 1, 4, 5, 8, 7, 6, 9]
// On average, it is O(n)
function partitionBasedOnPivot(array, start, end) {
  let i = start;
  let j = start;
  let pivot = array[end];

  while (i <= end) {
    if (array[i] <= pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j - 1;
}

function quickSelect(array, start, end, targetIndex) {
  // Base case: If the partition contains only one element, it must be our target
  if (start >= end) return array[start];

  // Partition the array around a pivot
  const pivotIndex = partitionBasedOnPivot(array, start, end);

  // Case 1: Found the exact index
  if (pivotIndex === targetIndex) {
    return array[pivotIndex];
  }
  // Case 2: Target is on the left side - Because on the left region we have the smaller elements
  else if (pivotIndex > targetIndex) {
    return quickSelect(array, start, pivotIndex - 1, targetIndex);
  }
  // Case 3: Target is on the right side - Because on the right region we have the bigger elements
  else {
    return quickSelect(array, pivotIndex + 1, end, targetIndex);
  }
}

// Helper function to make it user friendly
function findKthSmallest(arr, k) {
  const targetIndex = k - 1; // Convert to 0-based index
  return quickSelect(arr, 0, arr.length - 1, targetIndex);
}

// Example usage: Find the 3rd smallest element
// Sorted version would be: [1, 2, 3, 4, 5, 6, 7, 8, 9] -> 3rd smallest is 3
const nums = [2, 3, 1, 4, 5, 8, 7, 6, 9];
console.log(findKthSmallest(nums, 3)); // Output: 3