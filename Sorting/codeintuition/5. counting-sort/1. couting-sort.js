function countingSort(nums) {
  // base case
  if (!nums.length) return [];
  // get the range
  let range = Math.max(...nums);

  // and initialise the count array range + 1
  let count = new Array(range + 1).fill(0); // [1, 2, 1, 4, 0, 2]

  // build the count array
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] += 1;
  }

  // re-construct the sorted array
  let result = [];
  for (let i = 0; i <= range; i++) {
    while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  return result;
}

console.log(countingSort([2, 1, 0, 3, 1, 3, 5, 3, 3, 5]));