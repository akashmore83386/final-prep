/**
 * LC 1840 — Maximum Building Height
 *
 * Key idea:
 * - Sort restrictions by building index
 * - Left pass: tighten heights based on what's reachable from the LEFT
 * - Right pass: tighten heights based on what's reachable from the RIGHT
 * - Between each pair of pinned buildings, find the peak using formula:
 *   peak = floor((distance + h1 + h2) / 2)
 * - Return the max peak across all segments
 */

/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
function maxBuilding(n, restrictions) {
  // Step 1: Add building 1 (always height 0) and building n (no restriction = Infinity)
  // This ensures we have anchors at both ends
  restrictions.push([1, 0]);
  restrictions.push([n, Infinity]);

  // Step 2: Sort restrictions by building index (left to right)
  restrictions.sort((a, b) => a[0] - b[0]);

  const len = restrictions.length;

  // Step 3: LEFT PASS — tighten each restriction from the left
  // If building i has height h, building j can be at most h + (j - i)
  for (let i = 1; i < len; i++) {
    const [prevBuilding, prevHeight] = restrictions[i - 1];
    const [currBuilding, currHeight] = restrictions[i];

    const maxReachableFromLeft = prevHeight + (currBuilding - prevBuilding);

    // Cap the current building's height — can't exceed what's reachable from left
    restrictions[i][1] = Math.min(currHeight, maxReachableFromLeft);
  }

  // Step 4: RIGHT PASS — tighten each restriction from the right
  // Same logic but going backwards
  for (let i = len - 2; i >= 0; i--) {
    const [currBuilding, currHeight] = restrictions[i];
    const [nextBuilding, nextHeight] = restrictions[i + 1];

    const maxReachableFromRight = nextHeight + (nextBuilding - currBuilding);

    // Cap the current building's height — can't exceed what's reachable from right
    restrictions[i][1] = Math.min(currHeight, maxReachableFromRight);
  }

  // Step 5: Find the peak between every consecutive pair of pinned buildings
  let maxHeight = 0;

  for (let i = 1; i < len; i++) {
    const [leftBuilding, leftHeight] = restrictions[i - 1];
    const [rightBuilding, rightHeight] = restrictions[i];

    const distance = rightBuilding - leftBuilding;

    // Peak formula: the tallest mountain you can build between two pinned points
    // Think of it as: climb from both sides and meet in the middle
    const peak = Math.floor((distance + leftHeight + rightHeight) / 2);

    maxHeight = Math.max(maxHeight, peak);
  }

  return maxHeight;
}

console.log(maxBuilding(5, [[2,1],[4,1]]))