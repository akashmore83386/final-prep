// Given two integer arrays, arr1, and arr2, write a function to find and return an array of their intersection. You can return the result in any order.

// Example 1
// Input: arr1 = [1, 2, 2, 1], arr2 = [2, 2]
// Output: [2, 2]
// Explanation: [2, 2] contains the intersection of all the elements in the array.
// Example 2
// Input: arr1 = [4, 9, 5], arr2 = [9, 4, 9, 8, 4]
// Output: [4, 9]
// Explanation: [4, 9] contains the intersection of all the elements in the array. The answer [9, 4] is also accepted.
// Example 3
// Input: arr1 = [4, 9, 5], arr2 = [1, 2]
// Output: []
// Explanation: There is no intersection.

function solve(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let res = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] === arr2[index2]) {
      res.push(arr1[index1]);
      const val = arr1[index1];
      index1++
      index2++
    } else if (arr1[index1] < arr2[index2]) {
      index1++;
    } else {
      index2++;
    }
  }

  return res;
}

console.log(solve([1, 2, 2, 1], [2, 2]));
