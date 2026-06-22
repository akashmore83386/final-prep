export class Solution {
  forwardSequence(N) {
    // Base case: return an empty array when N hits 0
    if (N === 0) return [];

    // Get the array from the previous numbers [1, 2, ..., N-1]
    const result = this.forwardSequence(N - 1);

    // Add the current number
    result.push(N);

    return result;
  }
}

const check = new Solution()
console.log(check.forwardSequence(5))