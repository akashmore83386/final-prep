// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

// Input 1: nums = [1,2,3,4]
// Output 1: [1,3,6,10]
// Explanation 1: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Input 2: nums = [1,1,1,1,1]
// Output 2: [1,2,3,4,5]
// Constraints:
// 1 <= nums.length <= 1000
// -106 <= nums[i] <= 106

function solve(nums) {
    // we need to have the cumulative sum at each index
    let prefixSum = [nums[0]]

    for(let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i]
    }

    return prefixSum
}

console.log(solve([1, 2, 3, 4]))

// TC - O(n)
// SC - O(1)