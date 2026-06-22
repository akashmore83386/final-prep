// You are given an integer array heights, where height[i] represents the height of a wall at position i. Write a function to find two walls that, together with the x-axis, form a container holding the maximum water and return the area of this container.

// Area = min(heights[i], heights[j]) × (j − i)

// Where `i` and `j` are the indices of the two walls, and `i` < `j`.

// It is guaranteed that the input array will always contain more than one element.

// Input: heights = [2, 4, 3, 3, 5, 2, 4, 3, 2]
// Output: 20
// Explanation: In the above heights array (represented by grey) color, the area of the container with the most water is 20 (represented by green).

function solve(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  // Use a while loop to traverse the array using the two pointers
  while (left < right) {
    // Calculate the area between the two vertical lines using
    // left and right pointers
    let area = (right - left) * Math.min(heights[left], heights[right]);
    maxArea = Math.max(maxArea, area);

    // If the left line is smaller, move the left pointer to the
    // right
    if (heights[left] < heights[right]) {
      left++;
    }

    // If the right line is smaller, move the right pointer to
    // the left
    else {
      right--;
    }
  }

  return maxArea;
}

console.log(solve([2, 4, 3, 3, 5, 2, 4, 3, 2]));

// O(n)
// O(1)