// [2, 3, 1, 4, 5, 8, 7, 6, 9]

function partitionBasedOnPivot(array, start, end) {
  let i = start;
  let j = start; // j also starts from the start
  let pivot = array[end];

  while (i <= end) {
    if (array[i] <= pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j - 1; // once the array partition is done based on the pivot, we will get the pivot in region 1 as the last element. SO our pivot will be last elemennt always in the region 1
}

function quickSort(array, start, end) {
  if (start >= end) return;
  const pivotIndex = partitionBasedOnPivot(array, start, end);

  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
}

const arr = [1, 0, 2, 1, 0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);