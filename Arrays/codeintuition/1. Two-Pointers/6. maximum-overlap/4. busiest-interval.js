// Given an array of meetings consisting of start and end times [[s1, e1], [s2, e2], ...] (si < ei) of meetings, write a function to find and return the busiest interval, i.e. the time interval during which the maximum number of meetings overlap.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 > s2. If e1 == s2, the intervals are not considered overlapping.
// You must abide by the following constraints:

// If multiple intervals tie for the maximum overlap, return the first such interval.
// The output should be in the form [`intervalStart`, `intervalEnd`].
// If there are no overlapping intervals, return [`-1`, -`1`].
// Example 1
// Input: meetings = [[1, 3], [2, 4], [5, 6]]
// Output: [2, 3]
// Explanation: The interval [2, 3] is the busiest because it is the period during which the highest number of meetings overlap.
// Example 2
// Input: meetings = [[1, 8], [4, 5], [6, 7], [7, 8]]
// Output: [4, 5]
// Explanation: The intervals [4, 5], [6, 7], and [7, 8] all have the maximum number of overlapping meetings. Since [4, 5] occurs first, it is returned as the busiest interval.
// Example 3
// Input: meetings = [[1, 5], [5, 10], [10, 15]]
// Output: [-1, -1]
// Explanation: Meetings only touch at endpoints so there are no overlapping meetings.

function solve(meetings) {
  const timelineEvents = [];

  for (const [start, end] of meetings) {
    timelineEvents.push([start, 1]);
    timelineEvents.push([end, -1]);
  }

  timelineEvents.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let currentActiveRooms = 0;
  let maxRoomsNeeded = 0;
  let busiestStart = -1;
  let busiestEnd = -1;

  for (let i = 0; i < timelineEvents.length; i++) {
    const [currentTime, eventType] = timelineEvents[i];

    if (eventType === 1) {
      currentActiveRooms++;
      if (currentActiveRooms > maxRoomsNeeded) {
        maxRoomsNeeded = currentActiveRooms;
        busiestStart = currentTime;
        busiestEnd = timelineEvents[i + 1][0];
      }
    } else {
      currentActiveRooms--;
    }
  }

  if (maxRoomsNeeded <= 1) return [-1, -1];

  return [busiestStart, busiestEnd];
}

console.log(solve([[1, 3], [2, 4], [5, 6]]))

// O(nlogn)
// O(n)