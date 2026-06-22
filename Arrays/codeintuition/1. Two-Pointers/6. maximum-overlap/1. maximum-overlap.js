function maxOverlap(intervals) {
  const points = [];

  // Step 1: Store start and end points
  for (const [start, end] of intervals) {
    points.push([start, 1]); // 1 = start point
    points.push([end, -1]); // -1 = end point
  }

  console.log(points, "raw")

  // Step 2: Sort — same value: end (-1) comes before start (1)
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  console.log(points, "points")

  // Step 3: Initialize trackers
  let overlap = 0;
  let maxOverlap = 0;

  // Step 4: Sweep through points
  for (const [, type] of points) {
    console.log(type, "type")
    if (type === 1) {
      // Step 4.1: Start point → increment and update max
      overlap++;
      maxOverlap = Math.max(maxOverlap, overlap);
    } else {
      // Step 4.2: End point → decrement
      overlap--;
    }
  }

  return maxOverlap;
}

// Example
const intervals = [
  [1, 5],
  [2, 4],
  [3, 6],
];
console.log(maxOverlap(intervals)); // 3
