function knapSack(weight, value, W, n, t) {
  // Base case technique - Think of the smallest valid input, and return the answer in the output format
  if (n === 0 || W === 0) return 0;

  // we created matrix based on those variables which are changing, like in the recursive call, everytime we can see that W and n are changing so we created the matrix based on that only
  if (t[n][W] !== -1) return t[n][W];

  // We had a choice diagram, which means if the weight is lesser than the W then we have to choices, either we can include it or not include it.

  // If the weight is greater than W, then we don't have any choice we have to always exclude it

  // So as per our choice diagram, we either the weight if it is lesser than W or include it, or if the weight is greater than W then we always exclude it. SO we do have the 3 choices.
  if (weight[n - 1] <= W) {
    return (t[n][W] = Math.max(
      // we take the last value item, every time we remove the last element from the array using the recursion
      value[n - 1] + knapSack(weight, value, W - weight[n - 1], n - 1, t),
      knapSack(weight, value, W, n - 1, t),
    ));
  } else if (weight[n - 1] > W) {
    return (t[n][W] = knapSack(weight, value, W, n - 1, t));
  }
}

const n = 4,
  W = 7;
const t = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(-1));
console.log(knapSack([1, 3, 9, 5], [1, 4, 5, 7], 7, 4, t));

// So we have created our recursive call into the DP with the help of memoization

// Now here is the same for using the top down (real)

function knapSackTopDown(weight, value, W, n) {
  // initialize table with base case values (0)
  const t = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

  // i = items (rows), j = capacity (columns)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (weight[i - 1] <= j) {
        t[i][j] = Math.max(
          value[i - 1] + t[i - 1][j - weight[i - 1]], // include
          t[i - 1][j], // exclude
        );
      } else {
        t[i][j] = t[i - 1][j]; // can't include, forced exclude
      }
    }
  }

  return t[n][W];
}

console.log(knapSackTopDown([1, 3, 9, 5], [1, 4, 5, 7], 7, 4)); // 8

// 1. Problem - // We have n items, each with the weight and value. We have a bag of capacity W, we need to maximise the total value, so that we can fit in the bag without exceeding the W.

// Each item we either leave it or include it. Nothing in between! That is the 0/1 part.

// 2. Pattern - // Two signals scream DP here -
// 1. choice - include or exclude each item
// 2. optimal - maximise the value

// if above those 2 conditions are true then it is DP.

// 3. Approach -
// At every item, we ask does this item fit in my remaining capacity?
// YES - two choices, include it OR skip it - take the better one
// NO - no choice, forced to skip it

// EXPECTATION -

// weight = [1, 3, 9, 5]
// value  = [1, 4, 5, 7]
// W = 7, n = 4

// BEST combo - items {3, 5}, 3 + 5 weight is greater than the given W(weight).
// Next choice is - items {1, 5}, 1 + 5 = 6 <= 7. Okay we can take the items for this weight. Now their values are 1 + 7 = 8 which is the perfect maximum

// FAITH -

// Trust that knapSack(weight, value, W, n-1) already gives you the best value from the first n-1 items perfectly. You don't need to know how. Just trust it.
// Your job at item n is just:
// max(
//   value[n-1] + solve(W - weight[n-1], n-1),  // include
//   solve(W, n-1)                               // exclude
// )

function knapSack2(weight, value, W, n) {
  if (n === 0 || W === 0) return 0;

  if (weight[n - 1] <= W) {
    return Math.max(
      value[n - 1] + knapSack2(weight, value, W - weight[n - 1], n - 1), // include
      knapSack2(weight, value, W, n - 1), // or exclude
    );
  } else {
    // item doesn't fit → forced exclude
    return knapSack2(weight, value, W, n - 1);
  }
}

console.log(knapSack2([1, 3, 9, 5], [1, 4, 5, 7], 7, 4));

// memoized

function knapSack(weight, value, W, n) {
  const t = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(-1));

  function solve(W, n) {
    if (n === 0 || W === 0) return 0;        // step 0: base case

    // We created the variables based on those variables, which are changing, like in the recursive call, everytime we can see that W and n are changing so we created the matrix based on that only
    if (t[n][W] !== -1) return t[n][W];      // step 2: already computed?

    if (weight[n - 1] <= W) {
      return t[n][W] = Math.max(             // step 3: save before returning
        value[n - 1] + solve(W - weight[n - 1], n - 1),
        solve(W, n - 1)
      );
    } else {
      return t[n][W] = solve(W, n - 1);      // step 3: save before returning
    }
  }

  return solve(W, n);
}