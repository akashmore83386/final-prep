// an inversion meaning a number is bigger than smaller number in the array
// [1, 0, 3, 5, 3, 2, 5]
// In above example 1 > 0, that means 1 inversion count. So we have to return the count of inversions. How many numbers present which are bigger than next numbers and placed ahead.

// brute force
function bruteForce(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }

  return count;
}

// console.log(bruteForce([1, 0, 3, 5, 3, 2, 5]))

// Optimal - We can actually use the capability of the merge two sorted arrays in here, we know that in the merge two sorted arrays the secondHalf element is always smaller than all the elements from the firstHalf!

function solve(array) {
  let count = 0;

  function mergeSort(start, end) {
    if (start === end) return [array[start]];

    const mid = Math.floor((start + end) / 2);

    let firstHalf = mergeSort(start, mid);
    let secondHalf = mergeSort(mid + 1, end);

    return merge(firstHalf, secondHalf);
  }

  function merge(a1, a2) {
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
        count += a1.length - i;
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

  mergeSort(0, array.length - 1);
  return count;
}

console.log(solve([5, 4, 3, 2, 1]));
