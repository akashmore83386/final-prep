function solve(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // found the target
    if (array[mid] === target) {
      return mid;
    }

    // determine which half is sorted
    if (array[left] <= array[mid]) {
      // left half is sorted
      if (array[left] <= target && target < array[mid]) {
        // target is in left sorted half
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (array[mid] < target && target <= array[right]) {
        // target is in the right sorted half
        left = mid + 1;
      } else {
        // target is in the left half
        right = mid - 1;
      }
    }
  }
  return -1;
}