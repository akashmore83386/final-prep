/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function (n, l, r) {
  const MOD = 1e9 + 7;
  const m = r - l + 1; // Normalize the range [l, r] to [1, m]

  // Handle edge case where sequence length is 1 (Not possible per constraints, but good practice)
  if (n === 1) return m % MOD;

  // dp0: sequences where the NEXT required move is DOWN (last move was UP)
  // dp1: sequences where the NEXT required move is UP (last move was DOWN)
  // Arrays sized m + 2 to safely handle 1-based indexing and boundary conditions
  let dp0 = new Array(m + 2).fill(0);
  let dp1 = new Array(m + 2).fill(0);

  // Initialize base cases for length = 2
  for (let v = 1; v <= m; v++) {
    dp0[v] = v - 1; // Number of valid starting elements u < v
    dp1[v] = m - v; // Number of valid starting elements u > v
  }

  // Iterate to build sequences from length 3 up to n
  for (let i = 3; i <= n; i++) {
    let pref = new Array(m + 2).fill(0);
    let suff = new Array(m + 2).fill(0);

    // Build Prefix sum for dp1: Sum of sequences where last move was DOWN (so we can move UP to v)
    for (let v = 1; v <= m; v++) {
      pref[v] = (pref[v - 1] + dp1[v]) % MOD;
    }

    // Build Suffix sum for dp0: Sum of sequences where last move was UP (so we can move DOWN to v)
    for (let v = m; v >= 1; v--) {
      suff[v] = (suff[v + 1] + dp0[v]) % MOD;
    }

    // Create new arrays for the current length i
    let next_dp0 = new Array(m + 2).fill(0);
    let next_dp1 = new Array(m + 2).fill(0);

    // Calculate states for current length
    for (let v = 1; v <= m; v++) {
      // Next move down means we just moved UP from u < v
      // pref[v - 1] represents the sum of all valid u < v
      next_dp0[v] = pref[v - 1];

      // Next move up means we just moved DOWN from u > v
      // suff[v + 1] represents the sum of all valid u > v
      next_dp1[v] = suff[v + 1];
    }

    // Move to the next sequence length
    dp0 = next_dp0;
    dp1 = next_dp1;
  }

  // Aggregate total valid combinations
  let total = 0;
  for (let v = 1; v <= m; v++) {
    total = (total + dp0[v]) % MOD;
    total = (total + dp1[v]) % MOD;
  }

  return total;
};