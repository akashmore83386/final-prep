// [2, 3, 4, 1, 3, 6, 2, 4, 2]

// Step 1.1: Compare the heights of the first and second students in the queue and swap them if necessary.
// Step 1.2: Compare the heights of the second and third students in the queue and swap them if necessary.
// ...
// ...
// Step 1.N-1: Compare the heights of the (N - 1)th and Nth students in the queue and swap them if necessary.
// Step 2: Reduce the search space by excluding the last student from the queue, as he is now standing in the correct position.
// Step 3: Repeat the above process until all students have reached their correct positions.

function solve(arr) {
  const n = arr.length;

  // Iterate through each element in the array
  for (let i = 0; i < n - 1; i++) {
    // Compare adjacent elements and swap them if they are in the
    // wrong order
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

console.log(solve([2, 3, 4, 1, 3, 6, 2, 4, 2]));