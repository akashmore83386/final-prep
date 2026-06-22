// brute force approach - Copy all the elements of first array and then copy all the elements of second array into the result array and then we can sort the result array. Since we are copying first array then it will be O(n) and if we are also traversing the second array that will be O(m) and then we sort it so O((n + m) log (n + m)) TC final TC. AND SC is - O(n + m) since it will be resultant array of the n + m size
function solve(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result.sort((a, b) => a - b);
}

console.log(solve([1, 2, 2, 3, 4], [3, 7, 8, 9]));

// optimised approach -

// [1, 2, 2, 3, 4], // [3, 7, 8, 9]
// l          r

// Approach - 1. If arr[i] < arr[j] then we push arr[i] into result and move the i++, otherwise we push the arr[j] into result and move j++, if the arr[i] === arr[j] then it's upto us we can either push the arr[i] or arr[j], and at last if any of the array is remaining and other one is traversed then we copy all the elements and push that in the result array

// result = [1, 2, 2, 3, 3, 4, 8, 9]

function mergeSortedArrays(a1, a2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let res = new Array(a1.length + a2.length);

  while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) {
      res[k] = a1[i];
      i++;
      k++;
    } else {
      res[k] = a2[j];
      j++;
      k++;
    }
  }

  while (i < a1.length) {
    res[k] = a1[i];
    i++;
    k++;
  }

  while (j < a2.length) {
    res[k] = a2[j];
    j++;
    k++;
  }

  return res;
}

console.log(mergeSortedArrays([1, 2, 3, 4], [5, 6, 7, 8]));

// TC - O(n + m), SC - O(n + m)

// Above solution will not work directly with the leetcode question merge sorted array, because that leetcode problem wants us to build the array in the num1, so as per that problem no new array introduction is needed, but as per our solution we are creating the new resultant array and at the end we are returning that array -
// function merge(nums1, m, nums2, n) {
//   let p1 = m - 1;
//   let p2 = n - 1;
//   let p = m + n - 1;

//   while (p1 >= 0 && p2 >= 0) {
//     if (nums1[p1] > nums2[p2]) {
//       nums1[p] = nums1[p1];
//       p1--;
//     } else {
//       nums1[p] = nums2[p2];
//       p2--;
//     }
//     p--;
//   }

//   // if p2 still has elements remaining, copy them
//   while (p2 >= 0) {
//     nums1[p] = nums2[p2];
//     p2--;
//     p--;
//   }
//   // no need to handle p1 remaining — they're already in place
// }