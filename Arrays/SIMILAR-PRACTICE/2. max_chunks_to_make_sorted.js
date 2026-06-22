// You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].

// We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

// Return the largest number of chunks we can make to sort the array.

// We need to divide the array so that in every divided area if we sort the individual elements then we will get the whole array as sorted. And we have to return the max chunks that we can get

// "You should divide the array in as many as chunks possible, such that when you sort each of the chunks individually, you get the complete sorted array"

// Approach - In the main question it is given that elements are in the range of [0, n - 1], that means if we sort the input array, we will have the element and its index same! 

// If the maximum element so far is equal to the current index that means, I can create one chunk!

var maxChunksToSorted = function (arr) {
  let max = 0;
  let chunks = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);

    if (max === i) {
      chunks++;
    }
  }
  return chunks;
};

console.log(maxChunksToSorted([1, 0, 2, 3, 4]));

// [1, 0, 2, 3, 4]
//  0  1  2  3  4

// max = 4
// chunks = 4