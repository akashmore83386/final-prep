/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function (n, l, r) {
  if (n === 1) return r - l + 1;
  const m = r - l + 1;
  const MOD = 1000000007n;

  // Helper: Matrix Multiplication
  function multiply(A, B) {
    let C = Array.from({ length: 2 * m }, () => new BigInt64Array(2 * m));
    for (let i = 0; i < 2 * m; i++) {
      for (let k = 0; k < 2 * m; k++) {
        if (A[i][k] === 0n) continue;
        for (let j = 0; j < 2 * m; j++) {
          C[i][j] = (C[i][j] + A[i][k] * B[k][j]) % MOD;
        }
      }
    }
    return C;
  }

  // Build Transition Matrix
  let T = Array.from({ length: 2 * m }, () => new BigInt64Array(2 * m));
  for (let i = 0; i < m; i++) {
    // Up state i (value i+l) -> Down state j (value j+l) where j < i
    for (let j = 0; j < i; j++) T[i][m + j] = 1n;
    // Down state i (value i+l) -> Up state j (value j+l) where j > i
    for (let j = i + 1; j < m; j++) T[m + i][j] = 1n;
  }

  // Binary Exponentiation
  let res = Array.from({ length: 2 * m }, (_, i) => {
    let row = new BigInt64Array(2 * m);
    row[i] = 1n;
    return row;
  });
  let base = T;
  let power = BigInt(n - 1);
  while (power > 0n) {
    if (power % 2n === 1n) res = multiply(res, base);
    base = multiply(base, base);
    power /= 2n;
  }

  // Calculate sum of initial states (all possible starts are valid for length 1)
  let ans = 0n;
  for (let i = 0; i < 2 * m; i++) {
    for (let j = 0; j < 2 * m; j++) {
      ans = (ans + res[i][j]) % MOD;
    }
  }

  return Number(ans);
};