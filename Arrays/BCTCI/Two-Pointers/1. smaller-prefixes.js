// we are given the array like this -

// [1, 2, 2, -1]

// we have to return true if the prefix k sum is less than the prefix 2k sum otherwise we have to return false

// The actual problem statement is - Given an array of integers arr, where the length n is even, return wether the following condition holds for every k in the range 1 <= k <= n/2.

// "The sum of the first k elements is smaller than the sum of the first 2k elements", if this condition is false for any k in the range then we have to return false

// [1, 2, 2, -1]
//    k      2k

// k = [1], sum = 1
// 2k = [1, 2], sum = 3
// k < 2k, passed

// k = [1, 2], sum = 3
// 2k = [1, 2, 2, -1], sum = 4
// k < 2k, so this k also passed

// k is always the shorter prefix
// 2k is always the doubled prefix
// You check if sum(k) < sum(2k) for every k

// Brute force approach
// As per the observation of the question I can see that the k should be in range of 1 <= k <= n/2, so we can iterate through the array till the n/2 starting the loop from 1.

// Inside that first half section we can run another loop from 0 to k to get the first k sum, we can call it as the slow sum.

// And we run another loop from 0 to 2 * i, so we can get the doubled sum, or 2x sum, we can call this sum as fast sum

// After we have slow sum and fast sum from both our loops we then can check if slowSum >= fastSum then we return false immediately

// At the end we return the true, if there is no k which is more than 2k in sum

// Using this approach the inner loops grow with k. For each k you loop k + 2k = 3k times. Since k goes from 1 to n/2, total work is 3(1+2+3...+n/2) → that's what makes it O(n²), not just 2x passes. So TC - O(n^2) and SC - O(1)

function solve(array) {
  for (let k = 1; k <= array.length / 2; k++) {
    let slowSum = 0;

    for (let i = 0; i < k; i++) {
      slowSum += array[i];
    }

    let fastSum = 0;

    for (let i = 0; i < 2 * k; i++) {
      fastSum += array[i];
    }

    if (slowSum >= fastSum) return false;
  }

  return true;
}

console.log(solve([1, 2, 2, -1]));

// Suboptimal solution
// Above solution has the TC - O(n^2), we need to do better than this. We are recalculating the sum, that is why that is causing quadratic TC, so we can precompute the sum and then can access it. We can use the prefix sum array

// [1, 2, 2, -1], psum = [1, 3, 5, 4]

// k = 1:
//   slowSum = psum[k - 1]     = psum[0] = 1
//   fastSum = psum[2*k - 1]   = psum[1] = 3
//   1 < 3 ✅ continue

// k = 2:
//   slowSum = psum[k - 1]     = psum[1] = 3
//   fastSum = psum[2*k - 1]   = psum[3] = 4
//   3 < 4 ✅ return true

function subOptimal(array) {
  let psum = [];
  psum[0] = array[0];

  // build the prefix sum array
  for (let i = 1; i < array.length; i++) {
    psum[i] = psum[i - 1] + array[i];
  }

  // now we need to loop over the array to get the k, and then access sum from pre-computed prefix sum
  for (let k = 1; k <= array.length / 2; k++) {
    if (psum[k - 1] >= psum[2 * k - 1]) return false;
  }

  return true;
}

console.log(subOptimal([1, 2, 2, -1]));

// Okay so now using this solution we just using the observation, we have achieved the solution which is better, O(n) TC and O(n) in SC. BUT now since it is good in the TC but it is space consuming, can we do better than the O(n) in space?

// Optimal
// So in the optimal solution what we can do it, we can actually use the two pointer approach. In this approach, we will have both pointers starting from the same 0 index from our array. These pointers we will use to calculate the slowSum and fastSum. slowSum is the k elements sum and fastSum is the 2k elements sum.

// One thing is, that our slow pointer will run 1k speed and our fast pointer will run 2k speed.

// [1, 2, 2, -1]
//     sp    fp

// slowSum = 1X, 3
// fastSum = 3X, 4
// slowSum < fastSum, k passes

function optimal(array) {
  let sp = 0;
  let fp = 0;
  let slowSum = 0;
  let fastSum = 0;

  while (fp < array.length) {
    slowSum += array[sp];
    fastSum += array[fp] + array[fp + 1];

    if (slowSum >= fastSum) return false;

    // update the pointers
    sp += 1;
    fp += 2;
  }

  return true;
}

// Now this is the optimal solution - O(n) in TC and O(1) in space