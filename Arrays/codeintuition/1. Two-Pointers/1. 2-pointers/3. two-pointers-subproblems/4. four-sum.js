// Given an array arr and an integer target, write a function to find and return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that the following conditions are met:

// 1. 0 <= a, b, c, d < n
// 2. a, b , c and d are distinct
// 3. arr[a] + arr[b] + arr[c] + arr[d] = target
// You can return the answer in any order.

// Example 1
// Input: arr = [1, 0, -1, 0, -2, 2], target = 0
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
// Explanation: Above are the unique quadruplets that satisfy all the conditions.
// Example 2
// Input: arr = [2, 2, 2, 2, 2], target = 8
// Output: [[2, 2, 2, 2]]
// Explanation: Above are the unique quadruplets that satisfy all the conditions.

function solve(arr, target) {
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          result.push([arr[i], arr[j], arr[left], arr[right]]);

          while (left < right && arr[left] === arr[left + 1]) {
            left++;
          }

          while (left < right && arr[right] === arr[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return result;
}

console.log(solve([1, 0, -1, 0, -2, 2], 0));

// O(n^3)
// O(n)