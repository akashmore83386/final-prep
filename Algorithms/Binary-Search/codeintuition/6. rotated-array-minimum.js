function solve(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (array[mid] > array[right]) {
      // This is mismatch, because in the sorted array the biggest one is at last so that means our rotation must be happened in the right side
      left = mid + 1;
    } else {
      // Otherwise on the right side or at mid
      right = mid;
    }
  }
  return left;
}

console.log(solve([30, 40, 50, 10, 20]));