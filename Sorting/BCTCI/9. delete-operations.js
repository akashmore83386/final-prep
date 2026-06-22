// You're given an array of n integers, nums, and another array of at most n integers, operations, where each integer represents an operation to be performed on nums.

// If the operation number is k ≥ 0, the operation is "delete the number at index k in the original array if it has not been deleted yet. Otherwise, do nothing."
// If the operation number is -1, the operation is "delete the smallest number in nums that has not been deleted yet, breaking ties by smaller index."
// Return the state of nums after applying all the operations. Every number in operations is guaranteed to be between -1 and n-1 inclusive.

// Example 1: nums = [50, 30, 70, 20, 80], operations = [2, -1, 4, -1]
// Output: [50]
// Explanation:
// - Delete index 2 in the original array, element 70: [50, 30, 20, 80]
// - Delete 20, the smallest non-deleted number: [50, 30, 80]
// - Delete index 4 in the original array, element 80: [50, 30]
// - Delete 30, the smallest non-deleted number: [50]

// Example 2: nums = [1, 2, 3], operations = []
// Output: [1, 2, 3]. No operations to perform.

// Example 3: nums = [1, 2, 3], operations = [-1, -1, -1]
// Output: []. All elements are deleted.

// Full approach -

// We need to track the deleted index, so we will ask if this index has been deleted? YES or NO, so for that we can use the SET

// ALSO if the opertaion is -1 then we need to delete the smallest element. We can do that by sorting the array by values in the ascending order, in that way we can find the next smallest element easily. We just need to scan on the sorted array from left to right. BUT ONE PROBLE, What if two elements have the SAME value?

// nums = [30, 20, 30, 20]

// -1 operation → delete smallest
// Both 20s qualify!
// → delete the one at SMALLER INDEX first!

// So the sorting rule is:
// Primary:    value     → ASCENDING  (smallest first)
// Tiebreaker: index     → ASCENDING  (smaller index first)

// ----------------------------------------------------------------

// Step 1 → Build sortedNums with {value, index}
// Step 2 → Sort by value ASC, tiebreak by index ASC
// Step 3 → Use Set to track deleted indices
// Step 4 → Process operations:
//           k >= 0 → deleted.add(k)
//           k = -1 → scan sortedNums left to right,
//                    find first non-deleted element,
//                    add its index to deleted
// Step 5 → Return nums filtered by non-deleted indices

function deleteOperations(nums, deletions) {
  // Build sortedNums with {value, index}
  const sortedNums = nums.map((value, index) => ({ value, index }));

  // sort it by value ASC, tiebreak by index ASC
  sortedNums.sort((a, b) => {
    // you already know this!
    if (a.value !== b.value) {
      return a.value - b.value;
    }

    return a.index - b.index;
  });

  // Use Set to track deleted indices
  const deleted = new Set();

  // process operations
  for (let op of deletions) {
    if (op >= 0) {
      deleted.add(op);
    } else {
      // op === -1: delete smallest
      // scan sortedNums left to right
      // find first element NOT in deleted set
      for (let item of sortedNums) {
        if (!deleted.has(item.index)) {
          deleted.add(item.index);
          break; // stop after deleting one
        }
      }
    }
  }

  // Return nums filtered by non-deleted indices
  return nums.filter((_, index) => !deleted.has(index));
}

console.log(deleteOperations([50, 30, 70, 20, 80], [2, -1, 4, -1]));

// ⏱️ Complexity
// Time:  O(n log n) → sorting
//        O(n * m)   → m operations, each scans sortedNums
//        Total: O(n log n + n*m)

// Space: O(n) → sortedNums + deleted Set

// 🔑 Key Lessons
// 1. Store {value, index} when you need to track
//    original positions after sorting!

// 2. Set gives O(1) lookup for "is this deleted?"

// 3. Pre-sort once → scan efficiently for -1 ops