// we are given an array and a value, we have to have all the elements <= given value in the region 1 and all the values > in the region 2

// [4, 8, 3, 2, 6, 1, 7, 9, 5], k = 5

// [4, 3, 2, 1, 5, 8, 6, 7, 9]

// If we can directly sort the input array then the condition we will get our solution, as the sorted array, but then we will have the TC = O(n log n) and SC = O(n)

function bruteForce(arr, k) {
  return arr.sort((a, b) => a - b);
}

console.log(bruteForce([4, 8, 3, 2, 6, 1, 7, 9, 5], 5));

// We need to optimse it, so that TC = O(n) and SC = O(1)

// If we check for the expected complexity then I am think that this can be achieved by only using the two pointer technique

// BASED on this algorithm lots of questions are possible, there can be lot of questions, such as sort odd-even, or sort 0s and 1s

// Approach -
// we can divide the array in the 3 regions

// 0 to j - 1 region 1
// j to i - 1 region 2
// i to end region 3 (unknown)

// To put the element in region 2 we need to i++
// To put the element in the region 1 we need to to swap(i, j), i++, j++

// [4, 3, 2, 1, 5, 8, 7, 9, 6]
// j           i

// i = 8
// j = 4

// if i <= 5 we put this in the region 1, so swap(i, j), i++, j++
// else if i > 5, we put this in the region 2, so i++

function optimal(arr, target) {
  let left = 0;
  let right = 0;

  while (left < arr.length) {
    if (arr[left] <= target) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right++;
    } else {
      left++;
    }
  }

  return arr;
}

console.log(optimal([4, 8, 3, 2, 6, 1, 7, 9, 5], 5));