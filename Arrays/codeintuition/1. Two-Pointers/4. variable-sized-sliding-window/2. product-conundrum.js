// Given an array of positive integers arr and an integer k, write a function to find and return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1
// Input: arr = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have their product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]. Note that [10, 5, 2] is not included, as the product of 100 is not strictly less than k.
// Example 2
// Input: arr = [10, 5], k = 50
// Output: 2
// Explanation: The 2 subarrays that have their product less than 50 are: [10], [5]. Note that [10, 5] is not included, as the product of 50 is not strictly less than k.
// Example 3
// Input: arr = [1], k =1
// Output: 0
// Explanation: There are no subarrays whose product is less than k.

function solve(arr, k) {
  let left = 0;
  let count = 0;
  let currentWindowProduct = 1;

  for (let right = 0; right < arr.length; right++) {
    // add products
    currentWindowProduct *= arr[right];

    // until currentWindowProduct is greater than or equal to k
    while (currentWindowProduct >= k) {
        // then divide currentWindowProduct by left value, that is how we shrink
      currentWindowProduct = currentWindowProduct / arr[left];

      // and move ahead left
      left++;
    }

    // increase the count
    count = count + right - left + 1;
  }

  return count;
}

console.log(solve([10, 5, 2, 6], 100));

// O(n)
// O(1)