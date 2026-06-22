function bruteForce(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] >= target) {
        count++;
      }
    }
  }

  return count;
}

// TC - O(n), SC - O(1)
function optimal(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let count = 0;

  while (left < right) {
    if (arr[left] + arr[right] >= target) {
      count += right - left;
      right--;
    } else {
      left++;
    }
  }

  return count;
}

console.log(bruteForce([1, 2, 3, 4, 5], 5));
console.log(optimal([1, 2, 3, 4, 5], 5));

// 1, 2, 3, 4, 5
// l  r

// count = 4, 3, 1 = 8
// l + r >= k
// r - l = 2 - 1 = 1
// r--

// else
// l + r < k
// l++

// When arr[left] + arr[right] >= target, every element from index left to right-1 can pair with right to give a valid sum.

// 1, 2, 3, 4, 5
// l  r

// l + r >= 1 + 5 >= 5
//  1 + 5, 1 + 4, 2 + 4, 3 + 4
// count = 0 + 4 = 4

// l + r >= 1 + 4 >= 5
// 1 + 4, 2 + 4, 3 + 4
// count = 0 + 4 + 3 = 7

// l + r < k, l++

// l + r >= 2 + 3 >= 5
// 2 + 3
// count = 7 + 1 = 8

// okay so basic idea is since the array is sorted, if the arr[l] + arr[r] >= k then, there will be be definiately pairs >= k from arr[l] to arr[r - 1] those will be the counts