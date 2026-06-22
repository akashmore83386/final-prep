// [1, 2, 2, 1]
// we need to return if the nums is palindrome or not

function isPalindrome(nums, left = 0, right = nums.length - 1) {
  if (left >= right) return true;
  if (nums[left] !== nums[right]) return false;

  return isPalindrome(nums, left + 1, right - 1);
}

console.log(isPalindrome([1, 2, 2, 1]));

// expectation
// isPalindrome([1, 2, 2, 1], 0, 3)
// true

// faith
// isPalindrome([1, 2, 2, 1], 0 + 1, 3 - 1) // left = 1, right = 2 // we shrink our boundary, left + 1, right - 1
// true
// We have FAITH that checking the inner part, isPalindrome(arr, 1, 2),
// will correctly figure out if the rest of the array is a palindrome and return true.

// combine
// Tail recursion! Whatever the inner check decides is our final answer.
// We don't change it, we just return it.
// return isPalindrome(arr, left + 1, right - 1)

// generalise
// What are the smallest possible input, when we stop?
// Mismatch: If the elements at left and right don't match then we return false, becaus that is not the palindrome

// success: if the pointers meet in the middle or they cross each each other (left > right)
// it means we checked everything and it all matched!
// IF(left >= right) return true