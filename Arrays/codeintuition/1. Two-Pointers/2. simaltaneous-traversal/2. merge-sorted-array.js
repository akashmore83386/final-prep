// Given two integer arrays, arr1 and arr2, sorted in non-decreasing order, and two integers, m and n, representing the number of elements in arr1 and arr2, respectively. Write a function to modify array arr1 in place to merge array arr2 into the back of array arr1.

// You may assume that arr1 has enough space (size that is greater or equal to m + n) to hold additional elements from arr2.
// Example 1
// Input: arr1 = [1, 2, 3, 0, 0], m = 3, arr2 = [4, 5], n = 2
// Output: [1, 2, 3, 4, 5]
// Explanation: After the merge, arr1 will become [1, 2, 3, 4, 5].
// Example 2
// Input: arr1 = [1, 2, 5, 0, 0], m = 3, arr2 = [3, 4], n = 2
// Output: [1, 2, 3, 4, 5]
// Explanation: After the merge, arr1 will become [1, 2, 3, 4, 5].
// Example 3
// Input: arr1 = [1], m = 1, arr2 = [], n = 0
// Output: [1]
// Explanation: After the merge, arr1 will become [1].

function solve(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1; // start from last slot of arr1

  while (i >= 0 && j >= 0) {
    if (arr1[i] >= arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }

  // if arr2 still has elements remaining
  while (j >= 0) {
    arr1[k] = arr2[j];
    j--;
    k--;
  }

  return arr1;
}

console.log(solve([1, 2, 3, 0, 0], 3, [4, 5], 2));

// O(m + n) iterating over both arrays
// O(1)
