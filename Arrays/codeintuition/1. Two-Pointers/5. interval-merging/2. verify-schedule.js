// Given an array of meetings consisting of the start and end times [[s1, e1], [s2, e2], ...] (si < ei) of meetings, write a function that returns true if a person could attend all meetings. Return false otherwise.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 > s2. If e1 == s2, the intervals are not considered overlapping.
// Example 1
// Input: meetings = [[1, 20], [10, 30], [30, 40], [1, 5]]
// Output: false
// Explanation: The person can not attend all the meetings as they overlap.
// Example 2
// Input: meetings = [[1, 10], [1, 10], [1, 10]]
// Output: false
// Explanation: The person can not attend all the meetings as they overlap and are all at the same time.
// Example 3
// Input: meetings = [[1, 15], [15, 17], [17, 18]]
// Output: true
// Explanation: The person can attend all the meetings as they don't overlap.

function solve(meetings) {
  if (meetings.length <= 1) return true;

  const sorted = meetings.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const [pStart, pEnd] = sorted[i - 1];

    if (pEnd > start) {
      return false;
    }
  }
  return true;
}

console.log(
  solve([
    [1, 15],
    [15, 17],
    [17, 18],
  ]),
);

// O(n logn)
// O(n)