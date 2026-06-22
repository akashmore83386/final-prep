// Given an array of sorted non-overlapping intervals where intervals[i] = [si, ei], and a new interval, write a function to insert the new interval into the list and return a list of intervals after merging any overlapping intervals.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 >= s2.
// Example 1
// Input: intervals = [[1, 4], [6, 7]], interval = [3, 6]
// Output: [[1, 7]]
// Explanation: Inserting the interval [3, 6] into the list causes it to overlap with all existing intervals, so the entire set of intervals merges into a single combined interval.
// Example 2
// Input: intervals = [[4, 5], [7, 9]], interval = [6, 8]
// Output: [[4, 5], [6, 9]]
// Explanation: Inserting the interval [6, 8] into the list causes it to overlap with the interval [7, 9], so they merge into a single combined interval.
// Example 3
// Input: intervals = [[1, 2], [6, 7], [8, 9]], interval = [4, 5]
// Output: [[1, 2], [4, 5], [6, 7], [8, 9]]
// Explanation: The new interval can be inserted into the list without overlapping any existing intervals, so no merging is required.

function solve(intervals, newInterval) {
  const result = [];
  let [givenStart, givenEnd] = newInterval;
  let i = 0;

  // Phase 1: intervals that end before newInterval starts — no overlap
  while (i < intervals.length && intervals[i][1] < givenStart) {
    result.push(intervals[i]);
    i++;
  }

  // Phase 2: merge all overlapping intervals
  while (i < intervals.length && intervals[i][0] <= givenEnd) {
    givenStart = Math.min(givenStart, intervals[i][0]);
    givenEnd = Math.max(givenEnd, intervals[i][1]);
    i++;
  }
  result.push([givenStart, givenEnd]);

  // Phase 3: intervals that start after newInterval ends — no overlap
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

console.log(
  solve(
    [
      [1, 4],
      [6, 7],
    ],
    [3, 6],
  ),
);

// O(n)
// O(n)