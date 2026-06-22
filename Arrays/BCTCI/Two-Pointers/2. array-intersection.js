// Given two sorted arrays of integers, arr1 and arr2, return a new array with the elements that appear in both arrays, in sorted order, including duplicates present in both arrays.

// [1, 2, 3], [1, 3, 5]

// [1, 3] are the elements which is in the both arrays

function solve(arr1, arr2) {
  let left = 0;
  let right = 0;

  let result = [];

  // we need to traverse in valid bounds
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      // if ele in arr1 is smaller than ele in arr2 that means arr1 will never match the element in the arr2 ever! (because of sorted nature, arr2 always gets bigger), so we just skip it
      left++;
    } else if (arr1[left] > arr2[right]) {
      // same logic as per the above commented part, just skip the arr2 element now!
      right++;
    } else {
      // if both the elements match in the array then we push into the result array, and move forward our both pointers
      result.push(arr1[left]);

      left++;
      right++;
    }
  }

  return result;
}

console.log(solve([4,9,5], [9,4,9,8,4]))

// Complexity

// TC → O(n + m) ✅ — each pointer traverses its array only once
// SC → O(min(n, m)) — result array holds at most the smaller array's elements