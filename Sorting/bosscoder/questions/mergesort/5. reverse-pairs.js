// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var reversePairs = function (nums) {
//   if (nums.length <= 1) return 0;
//   let res = mergeSortCount(nums);
//   return res.count;
// };

// function mergeSortCount(array) {
//   if (array.length <= 1) return { sorted: array, count: 0 };

//   let mid = Math.floor(array.length / 2);

//   let left = mergeSortCount(array.slice(0, mid));
//   let right = mergeSortCount(array.slice(mid));

//   let merged = merge(left.sorted, right.sorted);

//   let result = left.count + right.count + merged.count;

//   return { sorted: merged.sorted, count: result };
// }

// function merge(a1, a2) {
//   // separate counting pass
//   let t = 0;
//   let count = 0;
//   for (let j = 0; j < a2.length; j++) {
//     while (t < a1.length && a1[t] <= 2 * a2[j]) t++;
//     count += a1.length - t;
//   }

//   // normal merge
//   let i = 0,
//     j = 0,
//     k = 0;
//   let res = new Array(a1.length + a2.length);
//   while (i < a1.length && j < a2.length) {
//     if (a1[i] <= a2[j]) res[k++] = a1[i++];
//     else res[k++] = a2[j++];
//   }
//   while (i < a1.length) res[k++] = a1[i++];
//   while (j < a2.length) res[k++] = a2[j++];

//   return { sorted: res, count };
// }

function solve(nums) {
  let count = 0;

  function mergeSort(start, end) {
    if (start === end) return [nums[start]];

    const mid = Math.floor((start + end) / 2);
    const firstHalf = mergeSort(start, mid);
    const secondHalf = mergeSort(mid + 1, end);

    return merge(firstHalf, secondHalf);
  }

  function merge(a1, a2) {
    // STEP 1 — COUNT first (separate from merge!)
    // both a1 and a2 are sorted so j never resets
    let j = 0;
    for (let i = 0; i < a1.length; i++) {
      // move j forward while reverse pair condition holds
      while (j < a2.length && a1[i] > 2 * a2[j]) {
        j++;
      }
      // j = how many a2 elements satisfy a1[i] > 2*a2[j]
      count += j;
    }

    // STEP 2 — MERGE normally (standard merge sort)
    let i = 0;
    let k = 0;
    j = 0; // reset j for merging
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

  mergeSort(0, nums.length - 1);
  return count;
}

console.log(solve([1, 3, 2, 3, 1])); // 2
console.log(solve([2, 4, 3, 5, 1])); // 3

// Count Inversions — count and merge in same loop ✅
// Reverse Pairs — count and merge in separate loops because conditions are different ✅