// Given an array of positive and negative numbers, arrange them in an alternate fashion such that every positive number is followed by a negative and vice-versa maintaining the order of appearance.

// The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

// Input: arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

// Input: arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

// Constraints:
// 1<=N<=105
// -105<=A[i]<=105

// we need to rearrange positive and negative numbers alternatively
var solve = function(nums) {
  const pos = nums.filter(n => n > 0);
  const neg = nums.filter(n => n < 0);
  const ans = [];
  let i = 0, j = 0;

  while (i < pos.length && j < neg.length) {
    ans.push(neg[j++]);
    ans.push(pos[i++]);
  }

  while (i < pos.length) ans.push(pos[i++]);
  while (j < neg.length) ans.push(neg[j++]);

  return ans;
};

console.log(solve([1, 2, 3, -4, -1, 4]));

// O(n)
// O(n)