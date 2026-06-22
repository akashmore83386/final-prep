// we are given an array of integers, and also a target element, we need to write down a function which will give the index of the target from the given array, -1 if the target is not present

function findTargetIndex(nums, target, index) {
  if (nums[index] === target) return index;
  if (index === nums.length) return -1;
  return findTargetIndex(nums, target, index + 1);
}

console.log(findTargetIndex([2, 3, 4, 8, 12], 12, 0)); // 4

// expectation
// findTargetIndex([2, 3, 4, 8, 12], 12, 0)
// we expect it to return 4, because target 12 is at index 4

// faith
// findTargetIndex([2, 3, 4, 8, 12], 12, 1)
// we check our current index which is 0, and at 0 we have 2 which is not equal to target 12, so we move our index, and made it 1

// generalise
// what is the smallest possible valid input, or when we stop?
// we stop when the arr[index] === target and then we return index
// ALSO the base case is if we not found then we return -1,
// index === arr.length return -1

// In Tail Recursion, the recursive "leap of faith" is the very last thing that happens in the function. Because of this, the Combine step essentially disappears—you don't do any math or array manipulation after the recursive call; you just return exactly what the faith call gives you!
