function equalSumPartition(nums) {
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false; // odd sum can't split equally
  const target = total / 2;
  return subsetSum(nums, target, n);
}

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

console.log(equalSumPartition([1, 2, 3, 5]));