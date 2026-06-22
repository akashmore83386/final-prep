// [[3, 9], [1, 4], [4, 7], [2, 3]]

function sortByElementAtIndex(intervals) {
  // we need to sort by the end values
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });

  return intervals;
}

console.log(
  sortByElementAtIndex([
    [3, 9],
    [1, 4],
    [4, 7],
    [2, 3],
  ]),
);