// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Input 1: accounts = [[1,2,3],[3,2,1]]
// Output 1: 6
// Explanation 1: 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Input 2: accounts = [[1,5],[7,3],[3,5]]
// Output 2: 10
// Constraints:
// m == accounts.length
// n == accounts[i].length
// 1 <= n,m <= 50
// 1 <= accounts[i][j] <= 102

function solve(accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    maxWealth = Math.max(maxWealth, wealth);
  }

  return maxWealth;
}

console.log(
  solve([[1,5],[7,3],[3,5]]),
);

// TC - O(n^2)
// SC - O(1)