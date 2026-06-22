// we are given an integer, we need to print the sequence in the reverse order
// n = 5
// output = [5, 4, 3, 2, 1]

function reverseSequence(n) {
  if (n === 0) return [];

  return [n, ...reverseSequence(n - 1)]; // because our base case, we know that it returns the array. So if we don't use the ... spread operator then our output will be [5, [4, 3, 2, 1]], a nested array. So we use the [5, ...[4, 3, 2, 1]] which finally becomes [5, 4, 3, 2, 1]
}

console.log(reverseSequence(5));

// expectation
// reverseSequence(5)
// [5, 4, 3, 2, 1]

// faith
// reverseSequence(4)
// [4, 3, 2, 1]

// combine
// reverseSequence(5) {
//     let arr = []
//     arr.push(n)
//     reverseSequence(4)
// }

// generalise
// if(n === 0) return []


// In Tail Recursion, the recursive "leap of faith" is the very last thing that happens in the function. Because of this, the Combine step essentially disappears—you don't do any math or array manipulation after the recursive call; you just return exactly what the faith call gives you!