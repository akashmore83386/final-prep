export class Solution {
  factorial(N) {
    if (N === 0) return 1;
    return this.factorial(N - 1) * N;
  }
}

const check = new Solution()
console.log(check.factorial(5))