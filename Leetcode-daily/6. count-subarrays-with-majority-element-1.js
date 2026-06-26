/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
  const n = nums.length;

  const pre = new Array(2 * n + 1).fill(0);

  pre[n] = 1;

  let cnt = n;
  let presum = 0;
  let ans = 0;

  for (const x of nums) {
    if (x === target) {
      presum += pre[cnt];

      cnt++;
      pre[cnt]++;
    } else {
      cnt--;

      presum -= pre[cnt];
      pre[cnt]++;
    }

    ans += presum;
  }

  return ans;
};
