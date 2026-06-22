// Given an integer array arr, write a function that sorts the numbers in ascending order based on the number of 1s in their binary representation. If two or more numbers have the same number of 1s, sort them based on their value. You must do this in place.

// Example 1
// Input: arr = [7, 10, 12, 18, 26]
// Output: [10, 12, 18, 7, 26]
// Explanation: Above is the sorted array based on the number of 1s in their binary representation.
// Example 2
// Input: arr = [3, 7, 10, 18, 2, 9, 15, 31]
// Output: [2, 3, 9, 10, 18, 7, 15, 31]
// Explanation: Above is the sorted array based on the number of 1s in their binary representation.
// Example 3
// Input: arr = [1, 2, 4, 8, 16]
// Output: [1, 2, 4, 8, 16]
// Explanation: Above is the sorted array based on the number of 1s in their binary representation.

function bitWiseSort(nums) {
  function countOnes(num) {
    return num.toString(2).split("1").length - 1;
  }

  nums.sort((a, b) => {
    if (countOnes(a) !== countOnes(b)) {
      return countOnes(a) - countOnes(b);
    }

    return a - b;
  });

  return nums;
}

console.log(bitWiseSort([7, 10, 12, 18, 26])); // [10, 12, 18, 7, 26]
console.log(bitWiseSort([3, 7, 10, 18, 2, 9, 15, 31])); // [2, 3, 9, 10, 18, 7, 15, 31]

// Time:  O(n log n) — sorting
//        Each comparison calls countOnes → O(log num) for toString
//        Total: O(n log n * log num)

// Space: O(1) — sorting in place!
//        (built-in sort uses O(log n) stack internally)

// Custom Compare = just change WHAT you compare!

// Normal sort:    a - b
// Bitwise sort:   countOnes(a) - countOnes(b)
// With tiebreak:  if equal → fallback comparison