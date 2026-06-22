var kClosest = function (points, k) {
  const targetIndex = k - 1;
  return quickSelect(points, 0, points.length - 1, targetIndex, k);
};

function quickSelect(points, start, end, targetIndex, k) {
  if (start > end) return points[start];
  const pivotIndex = partition(points, start, end);

  if (pivotIndex > targetIndex) {
    return quickSelect(points, start, pivotIndex - 1, targetIndex, k);
  } else if (pivotIndex < targetIndex) {
    return quickSelect(points, pivotIndex + 1, end, targetIndex, k);
  } else {
    return points.slice(0, k)
  }
}

function partition(points, start, end) {
  let i = start;
  let j = start;
  let pivot = points[end];

  while (i <= end) {
    if (
      points[i][0] ** 2 + points[i][1] ** 2 <=
      pivot[0] ** 2 + pivot[1] ** 2
    ) {
      [points[i], points[j]] = [points[j], points[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }

  return j - 1;
}