// count of smaller numbers after self

// [5,2,6,1] -> [2, 1, 1, 0]

// 1. We need to count the inversions for each number and then return that in the array
// 2. Approach - In the merge step, where we merge sorted arrays, we can then count it, because if we are merging the two sorted arrays, it is obvious that element from the first sorted array will be bigger than the element from the second sorted array. So once we have the inversion count for the element then we can push that in the result array, we will do this thing for all the element

function solve(nums) {
  // we need the final result array to return
  let result = new Array(nums.length).fill(0);

  // This will provide the sorted array on the input array, it will also use the merge function which helps to combine and provide the single sorted array from two sorted arrays
  function mergeSort(nums, start, end) {
    if (start === end) return [[nums[start], start]];
    const mid = Math.floor((start + end) / 2);
    const firstHalf = mergeSort(nums, start, mid);
    const secondHalf = mergeSort(nums, mid + 1, end);

    return merge(firstHalf, secondHalf);
  }

  // Now let us write down the merge function, in this function we will be getting the two sorted arrays, we have to add that in the single array
  function merge(a1, a2) {
    let i = 0;
    let j = 0;
    let k = 0;

    // track how many a2 elements have been placed so far
    let a2Placed = 0;

    let res = new Array(a1.length + a2.length);

    while (i < a1.length && j < a2.length) {
      if (a1[i][0] <= a2[j][0]) {
        // a2Placed tells us how many right-side elements
        // were smaller than a1[i] — that's our count!
        const [value, originalIndex] = a1[i];
        result[originalIndex] += a2Placed;
        res[k] = a1[i];
        i++;
        k++;
      } else {
        // a2[j] is smaller, place it and increment a2Placed
        a2Placed++;
        res[k] = a2[j];
        j++;
        k++;
      }
    }

    while (i < a1.length) {
      const [value, originalIndex] = a1[i];
      result[originalIndex] += a2Placed;
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

  mergeSort(nums, 0, nums.length - 1);

  return result;
}

console.log(solve([5, 2, 6, 1])); // [2, 1, 1, 0]

// Time: O(n log n) — merge sort splits log n levels, each level does O(n) work
// Space: O(n) — result array + recursion stack

// whenever a2[j] gets placed before a1[i]:
//     → a2[j] is smaller than remaining a1 elements
//     → a2Placed++

// whenever a1[i] gets placed:
//     → result[a1[i]'s original index] += a2Placed

// Say nums = [5, 3, 1]
// The answer should be [2, 1, 0] — meaning:

// 5 has 2 smaller elements to its right
// 3 has 1 smaller element to its right
// 1 has 0

// Now your current code would correctly give count = 3 (total inversions). But how do you know which element contributed what?
// Here's the thing — when merge sort splits and recombines, elements move around. By the time you're merging, 5 might be sitting at index 0 of a1 — but in the original array it was at index 0 too. You need to update result[0] += something.
// So the question is — how do you know which position in the result array to update, if you've lost track of where each element originally came from?
// That's why you need original indices. You need to carry them along with the values.
// So tell me — what small change would you make to your merge sort so each element remembers its original index?
