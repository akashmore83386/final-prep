/**
 * Heap Sort implementation
 * Time Complexity: O(N log N) - Worst, Best, and Average
 * Space Complexity: O(1) - In-place sorting
 * @param {number[]} nums
 * @return {number[]}
 */
var heapSort = function (nums) {
  const n = nums.length;

  // Phase 1: Build Max-Heap (Bottom-up approach)
  // Start from the last non-leaf node and move up to the root
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  // Phase 2: Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move the current root (maximum element) to the end
    [nums[0], nums[i]] = [nums[i], nums[0]];

    // Call heapify on the reduced heap to restore Max-Heap property
    heapify(nums, i, 0);
  }

  return nums;
};

/**
 * To heapify a subtree rooted with node i which is an index in nums[].
 * @param {number[]} nums - The array representation of the heap
 * @param {number} size - Size of the heap to consider
 * @param {number} i - The root index of the subtree to heapify
 */
function heapify(nums, size, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than root
  if (left < size && nums[left] > nums[largest]) {
    largest = left;
  }

  // If right child is larger than the largest so far
  if (right < size && nums[right] > nums[largest]) {
    largest = right;
  }

  // If largest is not root, swap and continue cascading down
  if (largest !== i) {
    [nums[i], nums[largest]] = [nums[largest], nums[i]];

    // Recursively heapify the affected sub-tree
    heapify(nums, size, largest);
  }
}