/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  const n = nums.length;
  let count = 0;
  let pref = 0;

  // The prefix sums can range from -n to n.
  // We shift them by n + 2 to make them 1-indexed and strictly positive for the Fenwick tree.
  // Size of the BIT needs to be at least 2n + 3
  const bit = new Array(2 * n + 3).fill(0);

  // Fenwick tree update function
  const update = (index, val) => {
    for (; index < bit.length; index += index & -index) {
      bit[index] += val;
    }
  };

  // Fenwick tree query function
  const query = (index) => {
    let sum = 0;
    for (; index > 0; index -= index & -index) {
      sum += bit[index];
    }
    return sum;
  };

  // Add the initial prefix sum of 0 (shifted by n + 2)
  update(0 + n + 2, 1);

  for (let i = 0; i < n; i++) {
    // Transform the array on the fly
    if (nums[i] === target) {
      pref += 1;
    } else {
      pref -= 1;
    }

    // Find how many previous prefix sums are strictly less than current `pref`
    // We query up to `pref - 1`. Shifted query index: (pref - 1) + n + 2 = pref + n + 1
    count += query(pref + n + 1);

    // Add the current prefix sum to the BIT
    update(pref + n + 2, 1);
  }

  return count;
};