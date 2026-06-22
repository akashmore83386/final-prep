// Given an array of intervals where intervals[i] = [si, ei], write a function to find and return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 > s2. If e1 == s2, the intervals are not considered overlapping.
// Example 1
// Input: intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
// Output: 1
// Explanation: The interval [1, 3] can be removed, and the rest of the intervals do not overlap.
// Example 2
// Input: intervals = [[1, 5], [1, 5], [1, 5]]
// Output: 2
// Explanation: We need to remove two [1, 5] to make the rest of the intervals non-overlapping.
// Example 3
// Input: intervals = [[1, 5], [5, 7], [7, 8]]
// Output: 0
// Explanation: We don't need to remove any of the intervals since they're already non-overlapping.

function solve(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let lastKeptEnd = -Infinity;
  let removals = 0;

  for (const [currentStart, currentEnd] of intervals) {
    if (currentStart >= lastKeptEnd) {
      lastKeptEnd = currentEnd;
    } else {
      removals++;
    }
  }

  return removals;
}

console.log(solve([[1, 2], [2, 3], [3, 4], [1, 3]]))

// O(nlogn)
// O(1)