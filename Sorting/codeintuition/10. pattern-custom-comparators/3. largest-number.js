// Given an array of non-negative numbers arr, write a function to concatenate these numbers to form the largest number. Since the output could go out of bounds, return a string result.

// Example 1
// Input: arr = [200, 3]
// Output: 3200
// Explanation: Above is the largest number that can be formed.
// Example 2
// Input: arr = [200, 8, 1, 3]
// Output: 832001
// Explanation: Above is the largest number that can be formed.
// Example 3
// Input: arr = [50, 20, 10, 5]
// Output: 5502010
// Explanation: Above is the largest number that can be formed.

function largestNumber(nums) {
  // 102, 210
  nums.sort((a, b) => {
    const optionA = String(a) + String(b);
    const optionB = String(b) + String(a);

    if (optionA > optionB) return -1;
    if (optionA < optionB) return 1;

    return 0;
  });

  if (nums[0] === 0) return "0";

  return nums.map(String).join("");
}

console.log(largestNumber([10, 2]));