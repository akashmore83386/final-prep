function insertionSort(arr) {
  // Get the length of the array
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    // Select the current element as the key
    const key = arr[i];

    // Start comparing with the previous element
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than the
    // key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      // Shift the elements one position to the right
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key in its correct position
    arr[j + 1] = key;
  }
}