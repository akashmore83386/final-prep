// Given an array of meetings consisting of the start and end times [[s1, e1], [s2, e2], ...] (si < ei) of all meetings of the employees of a company, write a function to find and return the time intervals where all the employees are free, i.e., none of them are in a meeting.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 >= s2.
// Example 1
// Input: meetings = [[1, 4], [2, 3], [3, 4], [4, 6], [8, 9]]
// Output: [[6, 8]]
// Explanation: All the employees will be free only in the interval [6, 8].
// Example 2
// Input: meetings = [[1, 2], [4, 6], [5, 7], [9, 10]]
// Output: [[2, 4], [7, 9]]
// Explanation: All the employees will be free only in the intervals [2, 4] and [7, 9].
// Example 3
// Input: meetings = [[1, 5], [2, 4], [5, 9]]
// Output: []
// Explanation: There are no time intervals during which all employees are simultaneously free.

function solve(meetings) {
  if (meetings.length <= 1) return [];

  const sorted = meetings.sort((a, b) => a[0] - b[0]);

  const freeTime = [];
  let maxEnd = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];

    if (maxEnd < start) {
      freeTime.push([maxEnd, start]);
    }

    maxEnd = Math.max(maxEnd, end);
  }

  return freeTime;
}

console.log(
  solve([
    [1, 4],
    [2, 3],
    [3, 4],
    [4, 6],
    [8, 9],
  ]),
);

// O(n logn)
// O(n)