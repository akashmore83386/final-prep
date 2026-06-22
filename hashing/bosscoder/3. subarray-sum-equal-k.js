function solve(nums, k) {
  if (nums.length === 0) return 0;

  // store { prefixSum → frequency }
  // initialise with 0:1 because empty prefix has sum 0
  let map = new Map()
  map.set(0, 1)

  let count = 0
  let runningSum = 0

  // single loop — no ps array needed
  for (let j = 0; j < nums.length; j++) {
    // build running prefix sum on the go
    runningSum += nums[j]

    // if (runningSum - k) exists in map,
    // it means there's a subarray ending at j that sums to k
    let target = runningSum - k
    if (map.has(target)) {
      count += map.get(target)
    }

    // store current runningSum in map
    map.set(runningSum, (map.get(runningSum) || 0) + 1)
  }

  return count
}

console.log(solve([1, 1, 1], 2)); // 2