function isNested(circles) {
  // step 1: sort by radius descending
  circles.sort((a, b) => b.radius - a.radius);
  // step 2: check each consecutive pair
  for (let i = 0; i < circles.length - 1; i++) {
    const outer = circles[i]; // bigger circle
    const inner = circles[i + 1]; // smaller circle

    // is inner completely inside outer?
    if (distance(outer, inner) + inner.radius >= outer.radius) {
      return false; // not nested!
    }
  }
  // step 3: return true if all pass
  return true;
}

function distance(c1, c2) {
  return Math.sqrt(
    (c2.center.x - c1.center.x) ** 2 + (c2.center.y - c1.center.y) ** 2,
  );
}

const circles1 = [
  { center: { x: 4, y: 4 }, radius: 5 },
  { center: { x: 8, y: 4 }, radius: 2 },
];
console.log(isNested(circles1)); // false

// Time:  O(n log n) — sorting
// Space: O(1) — in place

// Approach - 

// Part 1 → Sort circles by radius DESCENDING
//          (custom comparator — you've seen this!)

// Part 2 → Check if each consecutive circle
//          is actually INSIDE the previous one
//          (new logic using distance formula)