// Step 1: Recursive
function solve(arr, sum, n) {
  if (sum === 0) return 1; // found a valid subset
  if (n === 0) return 0; // no items left, sum not reached

  if (arr[n - 1] <= sum) {
    return (
      solve(arr, sum - arr[n - 1], n - 1) + // include
      solve(arr, sum, n - 1)
    ); // exclude
  } else {
    return solve(arr, sum, n - 1); // forced exclude
  }
}

// Step 2: Memoized
function countSubsets(arr, sum, n) {
  const t = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(-1));

  function solve(sum, n) {
    if (sum === 0) return 1;
    if (n === 0) return 0;

    if (t[n][sum] !== -1) return t[n][sum];

    if (arr[n - 1] <= sum) {
      return (t[n][sum] = solve(sum - arr[n - 1], n - 1) + solve(sum, n - 1));
    } else {
      return (t[n][sum] = solve(sum, n - 1));
    }
  }

  return solve(sum, n);
}

// Step 3: Tabulation (bottom-up)
function countSubsetsTab(arr, sum, n) {
  const t = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(0));

  // base case: sum === 0 → always 1 way (empty subset)
  for (let i = 0; i <= n; i++) t[i][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] + t[i - 1][j]; // include + exclude
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][sum];
}

console.log(countSubsetsTab([2, 3, 5, 6, 8, 10], 10, 6)); // 3
// subsets: [2,8], [2,3,5], [10]