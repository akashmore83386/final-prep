// You are given an array called people, where people[i] represents a pair (hi, ki) that indicates the height of the ith person and the number of people standing in front of them whose height is greater than or equal to hi. However, this queue is not in the correct order as defined by this property. Write a function to sort this queue to ensure it is ordered according to the specified criteria.

// Example 1
// Input: people = [[5, 1], [5, 0]]
// Output: [[5, 0], [5, 1]]
// Explanation: Above is the correct order of people.
// Example 2
// Input: people = [[1, 4], [2, 3], [3, 2], [4, 1], [5, 0]]
// Output: [[5, 0], [4, 1], [3, 2], [2, 3], [1, 4]]
// Explanation: Above is the correct order of people.
// Example 3
// Input: people = [[5, 0], [4, 1], [3, 2], [2, 3], [1, 4]]
// Output: [[5, 0], [4, 1], [3, 2], [2, 3], [1, 4]]
// Explanation: People are already standing in the correct order.

function sortPeopleByHeight(people) {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      // height decreasing
      return b[0] - a[0];
    }

    // if the height is same, then sort k ascending
    return a[1] - b[1];
  });

  // now we need to put the k at the correct position
  let result = [];

  for (let person of people) {
    result.splice(person[1], 0, person);
  }

  return result;
}

console.log(
  sortPeopleByHeight([
    [5, 1],
    [5, 0],
  ]),
);
console.log(
  sortPeopleByHeight([
    [1, 4],
    [2, 3],
    [3, 2],
    [4, 1],
    [5, 0],
  ]),
);
console.log(
  sortPeopleByHeight([
    [5, 0],
    [4, 1],
    [3, 2],
    [2, 3],
    [1, 4],
  ]),
);
