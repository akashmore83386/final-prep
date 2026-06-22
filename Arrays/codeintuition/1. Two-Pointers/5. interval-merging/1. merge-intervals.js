function solve(intervals) {
  if (intervals.length <= 1) return intervals;

  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  const merged = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const [pStart, pEnd] = merged[merged.length - 1];

    if (pEnd > start) {
      merged[merged.length - 1][1] = Math.max(pEnd, end);
    } else {
      merged.push([start, end]);
    }
  }

  return merged;
}

console.log(
  solve([
    [2, 5],
    [6, 9],
    [5, 7],
    [1, 4],
  ]),
);
// O(nlogn)
// O(n)
