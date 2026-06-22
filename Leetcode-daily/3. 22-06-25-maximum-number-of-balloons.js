/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  // Initialize a frequency map for the required characters
  const counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  // Count the occurrences of each relevant character in the text
  for (const char of text) {
    if (counts[char] !== undefined) {
      counts[char]++;
    }
  }

  // Calculate the maximum number of times "balloon" can be formed
  // 'l' and 'o' require 2 characters per word, so we divide their count by 2
  return Math.floor(
    Math.min(
      counts["b"],
      counts["a"],
      counts["l"] / 2,
      counts["o"] / 2,
      counts["n"],
    ),
  );
};
