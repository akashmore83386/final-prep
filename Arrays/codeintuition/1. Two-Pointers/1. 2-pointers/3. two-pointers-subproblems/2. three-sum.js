// Given an integer array arr, write a function that returns all the triplets [arr[i], arr[j], arr[k]] such that i != j, i != k, and j != k, and arr[i] + arr[j] + arr[k] == 0. You can return the answer in any order.

// Notice that the solution set must not contain duplicate triplets.
// Example 1
// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Explanation: [-1, -1, 2] and [-1, 0, 1] are the two eligible triplets that sum to 0.
// Example 2
// Input: arr = [0, 0, 0]
// Output: [[0, 0, 0]]
// Explanation: The only possible triplet sums up to 0.
// Example 3
// Input: arr = [2, 7, 11, 15]
// Output: []
// Explanation: There are no triplets such that the sum of three numbers is 0.

function solve(arr) {
  arr.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right] + arr[i];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([arr[left], arr[right], arr[i]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      }
    }
  }

  return res;
}

console.log(solve([-1, 0, 1, 2, -1, -4]));

// O(n^2)
// O(n)
