function selectionSort(arr) {
  const n = arr.length;

  // Iterate over each element except the last one
  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the smallest
    let minIndex = i;

    // Find the index of the smallest element in the remaining
    // unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        // Update the index of the smallest element
        minIndex = j;
      }
    }

    // Swap the current element with the smallest element found
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}