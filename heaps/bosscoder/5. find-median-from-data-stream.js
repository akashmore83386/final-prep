// IMP question
// Stream - which is not stopping, coming again and again. Suppose I am given stream of numbers, which means a flow of number which is not stopping. At any point, I can tell what is the median till now.

// Median - For odd number of elements, the median value will be middle and for even number of elemennts the median value will be middle two values sum / 2

// 5, 7, 3, 11, 2, 1
// sorted - 1, 2, 3, 5, 7, 11
// middle - 4

// Approach -

// For addNum:
// We are going to use both heaps! We push our new element into the maxHeap first.

// Then, to make sure the halves are properly sorted, we pop out the top element from the maxHeap and push that straight into the minHeap.

// Then we check the sizes. We ALWAYS want the maxHeap to hold the exact middle element if the total count is odd. SO, if maxHeap.size() < minHeap.size(), it's unbalanced! What we do is pop the top from the minHeap and push it right back to the maxHeap!

// For findMedian:
// We just check the sizes of the heaps! If maxHeap.size() > minHeap.size(), this is the odd case! We simply return the top element of the maxHeap.

// If the sizes are exactly the same, NO!! This time it is the even case!! NOW we simply get the top elements of both heaps, add them together, and divide by 2 so we get the exact median.

// import { MaxHeap } from "../SIMILAR-PRACTICE/1. max-heap.js";
// import { MinHeap } from "../SIMILAR-PRACTICE/2. min-heap.js";

const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require("@datastructures-js/priority-queue");

class MedianFinder {
  constructor() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
  }

  addNum(num) {
    this.maxHeap.enqueue(num);
    this.minHeap.enqueue(this.maxHeap.dequeue());

    if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.enqueue(this.minHeap.dequeue());
    }
  }

  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.getMax();
    } else {
      const maxHeapTop = this.maxHeap.front();
      const minHeapTop = this.minHeap.front();

      return (maxHeapTop + minHeapTop) / 2;
    }
  }
}

const check = new MedianFinder();

check.addNum(12);
check.addNum(21);
check.addNum(13);
check.addNum(19);

console.log(check.findMedian());