// Given an array of meetings consisting of start and end times [[s1, e1], [s2, e2], ...] (si < ei) of meetings, write a function to find and return the minimum number of meeting rooms required so that all meetings can take place.

// Two intervals [s1, e1] and [s2, e2] are considered overlapping if e1 > s2. If e1 == s2, the intervals are not considered overlapping.
// Example 1
// Input: meetings = [[1, 20], [10, 30], [30, 40], [1, 5]]
// Output: 2
// Explanation: We need at least two meeting rooms for all meetings. The first two rooms are used for the meetings [1, 5], [1, 20]. When the first room is over, it will be used for the [10, 30] meeting, and when the second room is free, it will be used for the meeting between [30, 40].
// Example 2
// Input: meetings = [[1, 10], [1, 10], [1, 10]]
// Output: 3
// Explanation: We need at least three meeting rooms so that all meetings can take place.
// Example 3
// Input: meetings = [[1, 15], [15, 17], [17, 18]]
// Output: 1
// Explanation: One meeting room is enough for all the meetings to take place.

function solve(meetings) {
  const timelineEvents = [];

  for (const [start, end] of meetings) {
    timelineEvents.push([start, 1]); // meeting started
    timelineEvents.push([end, -1]); // meeting ended
  }

  timelineEvents.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let currentActiveRooms = 0;
  let maxRoomsNeeded = 0;

  for (const [, eventType] of timelineEvents) {
    if (eventType === 1) {
      currentActiveRooms++;
      maxRoomsNeeded = Math.max(maxRoomsNeeded, currentActiveRooms);
    } else {
      currentActiveRooms--;
    }
  }

  return maxRoomsNeeded;
}

console.log(
  solve([
    [1, 20],
    [10, 30],
    [30, 40],
    [1, 5],
  ]),
);

// O(n log n)
// O(n)
