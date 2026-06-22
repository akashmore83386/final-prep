/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  // Step 1: Find the maximum cost to determine the size of our frequency array
  let maxCost = 0;
  for (let cost of costs) {
    if (cost > maxCost) {
      maxCost = cost;
    }
  }

  // Step 2: Create and populate the frequency array
  // freq[i] will store how many ice cream bars cost exactly 'i'
  const freq = new Array(maxCost + 1).fill(0);
  for (let cost of costs) {
    freq[cost]++;
  }

  let iceCreamsBought = 0;

  // Step 3: Iterate through the frequencies to buy ice creams from cheapest to most expensive
  for (let cost = 1; cost <= maxCost; cost++) {
    // If there are no ice creams at this price, skip
    if (freq[cost] === 0) continue;

    // If we don't have enough coins to buy even one of this price, we are done
    if (coins < cost) break;

    // Determine the maximum number of ice creams we can buy at this price
    // It's the minimum between the available stock and what we can afford
    let affordableCount = Math.min(freq[cost], Math.floor(coins / cost));

    // Buy them
    iceCreamsBought += affordableCount;
    coins -= affordableCount * cost;
  }

  return iceCreamsBought;
};