// [1, 0, 2, 1, 0]

// brute force we can directly sort the array, TC - O(n log n), SC - O(1)

function bruteForce(arr) {
  return arr.sort((a, b) => a - b);
}

// Now we need to make it better, so for that we need to think of the O(n) approach, what if we can have the number of counts of 0s, 1s, and 2s and then return a new array with that much count? This will be O(n) in time but in SC it will be O(n)

function subOptimal(arr) {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }

  let newArray = [];

  for (let i = 0; i < zeroCount; i++) {
    newArray.push(0);
  }

  for (let i = 0; i < oneCount; i++) {
    newArray.push(1);
  }

  for (let i = 0; i < twoCount; i++) {
    newArray.push(2);
  }

  return newArray;
}

// Optimal solution

// This is kind of similar problem as per the previous but in this we will be using the 3 pointers approach, we have to sort the array such that 0 should be in in region 1, 1 should be in region 2, and 3 should be in the region 3

// This solution's TC will be O(n) and SC will be O(1)

// This algorithm also called as the Dutch National Flag Algorithm, and also lot of questions possible based on this. Such as Quick sort partitioning, sort colors, sort 012, sort even odd numbers, or advanced partioning

function optimal(arr) {
  let i = 0;
  let j = 0;
  let k = arr.length - 1;

  while (i <= k) {
    if (arr[i] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k--;
    }
  }

  return arr;
}

console.log(optimal([2, 0, 2, 1, 1, 0]));
// i         k
// [2,0,2,1,1,0]
// j
// 0 to j - 1 region 1
// j to i - 1 region 2
// i to k   unknown
// k + 1 to region 3

// if i === 0, then goes in region 1, that means swap(i, j), i++, j++
// if i === 1, then goes in region 2, that means i++
// if i === 2, then goes in region 3, that means swap(i, k), k--