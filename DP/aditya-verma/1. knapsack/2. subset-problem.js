// Step 1: Recursive
function solve(arr, sum, n) {
  if (sum === 0) return true;
  if (n === 0) return false;        // sum not 0 but no items left

  if (arr[n - 1] <= sum) {
    return solve(arr, sum - arr[n - 1], n - 1) || // include
           solve(arr, sum, n - 1);                 // exclude
  } else {
    return solve(arr, sum, n - 1);                 // forced exclude
  }
}

// Step 2: Memoized
function knapSack(arr, sum, n) {
  const t = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(-1));

  function solve(sum, n) {
    if (sum === 0) return true;
    if (n === 0) return false;

    if (t[n][sum] !== -1) return t[n][sum];

    if (arr[n - 1] <= sum) {
      return t[n][sum] = solve(sum - arr[n - 1], n - 1) || solve(sum, n - 1);
    } else {
      return t[n][sum] = solve(sum, n - 1);
    }
  }

  return solve(sum, n);
}

// Step 3: Tabulation (bottom-up)
function subsetSum(arr, sum, n) {
  const t = Array.from({ length: n + 1 }, () => new Array(sum + 1).fill(false));

  // base case: sum === 0 is always true (empty subset)
  for (let i = 0; i <= n; i++) t[i][0] = true;
  // base case: n === 0 with sum > 0 is always false (already false by default)

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }

  return t[n][sum];
}

console.log(subsetSum([2, 3, 7, 8, 10], 11, 5)); // true (3 + 8 = 11)