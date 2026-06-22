// Given an array of jobs, consisting of start time, end time, and required resources [[s1, e1, r1], [s2, e2, r2], ...] (si < ei) for the jobs, write a function to find and return the busiest interval formed by overlapping jobs.

// The busiest interval is the period during which the total resources required across all overlapping jobs are maximised.
// Your function should return both this interval and the corresponding maximum resources needed during that time.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 > s2. If e1 == s2, the intervals are not considered overlapping.
// You must abide by the following constraints:

// If multiple intervals tie for the maximum resources, return the first such interval.
// The output should be in the form [`intervalStart`, `intervalEnd`, `maxResources`].
// If there are no overlapping intervals, return [`-1`, -`1`, `0`].
// Example 1
// Input: jobs = [[1, 5, 2], [2, 6, 3], [4, 7, 4]]
// Output: [4, 5, 9]
// Explanation: At interval [4, 5], all three jobs overlap, requiring 2 + 3 + 4 = 9 resources, which is the maximum.
// Example 2
// Input: jobs = [[1, 3, 1], [2, 4, 5], [5, 6, 4]]
// Output: [2, 3, 6]
// Explanation: At interval [2, 4], the first two jobs overlap, requiring 1 + 5 = 6 resources, which is the maximum.
// Example 3
// Input: jobs = [[1, 5, 2], [5, 10, 3], [10, 15, 5]]
// Output: [-1, -1, 0]
// Explanation: Jobs only touch at endpoints, so there are no overlapping jobs.

function solve(jobs) {
  const timelineEvents = [];

  for (const [start, end, resources] of jobs) {
    timelineEvents.push([start, resources]);
    timelineEvents.push([end, -resources]);
  }

  timelineEvents.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let currentResources = 0;
  let maxResources = 0;
  let currentActiveJobs = 0; // ← added
  let busiestStart = -1;
  let busiestEnd = -1;

  for (let i = 0; i < timelineEvents.length; i++) {
    const [currentTime, resourceChange] = timelineEvents[i];

    currentResources += resourceChange;
    if (resourceChange > 0)
      currentActiveJobs++; // ← job started
    else currentActiveJobs--; // ← job ended

    if (currentActiveJobs > 1 && currentResources > maxResources) {
      // ← only when 2+ jobs overlap
      maxResources = currentResources;
      busiestStart = currentTime;
      busiestEnd = timelineEvents[i + 1][0];
    }
  }

  if (busiestStart === -1) return [-1, -1, 0];

  return [busiestStart, busiestEnd, maxResources];
}

console.log(
  solve([
    [1, 5, 2],
    [2, 6, 3],
    [4, 7, 4],
  ]),
);

// O(nlogn)
// O(n)
