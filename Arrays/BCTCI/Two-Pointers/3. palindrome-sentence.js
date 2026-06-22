// Given a string satisfies, return wether its letters form a palindrome ignoring punctuation, spaces, and spacing

// Example - s = "Bob wondered, 'Now, Bob?'"

// bobwonderednowbob - yes it is

function solve(string) {
  const cleaned = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // s = amannama
  let left = 0;
  let right = cleaned.length - 1;

  while (left <= right) {
    if (cleaned[left] !== cleaned[right]) return false;

    left++;
    right--;
  }

  return true;
}

console.log(solve("Bob wondered, 'Now, Bob?'"));

// Complexity

// TC → O(n) — one pass to clean, one pass for two pointers
// SC → O(n) — cleaned string

// Optimal

function isPalindromeAdvanced(str) {
  let left = 0;
  let right = str.length - 1;

  // Helper function to check if character is alphanumeric
  const isAlphaNumeric = (char) => /[a-z0-9]/i.test(char);

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphaNumeric(str[left])) {
      left++;
    }
    // Skip non-alphanumeric characters from right
    while (left < right && !isAlphaNumeric(str[right])) {
      right--;
    }

    // Compare characters case-insensitively
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeAdvanced("A man, a plan, a canal: Panama")); // true

// O(n)
// O(1)