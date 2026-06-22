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

// console.log(mergeSortedArrays([1, 2, 3, 4], [5, 6, 7, 8]))

// This merge sort algorithm is going to take the unsorted array and it will return us the sorted array

// How merge sort works? It separates the entire input array into smaller parts recursively and then apply the merge function which we wroted down earlier to merge the sorted parts and ultimately returns us entire sorted array
function mergeSort(array, start, end) {
  if (start === end) return [array[start]];

  const mid = Math.floor((start + end) / 2);

  let firstHalf = mergeSort(array, start, mid);
  let secondHalf = mergeSort(array, mid + 1, end);

  return mergeSortedArrays(firstHalf, secondHalf);
}

console.log(mergeSort([7, 4, 3, 8, 1], 0, 4));