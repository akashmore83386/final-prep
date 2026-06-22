import { MinHeap } from "../SIMILAR-PRACTICE/2. min-heap.js";

function mergeKSortedLists(lists) {
  // have a mean heap to store the lists values
  const minHeap = new MinHeap();

  // loop over the list
  for (let i = 0; i < lists.length; i++) {
    let temp = lists[i];

    while (temp !== null) {
      minHeap.insert(temp.val);
      temp = temp.next;
    }
  }

  // create the dummy node for the final node
  let dummyNode = new ListNode(-1);
  let k = dummyNode;

  while (!minHeap.isEmpty()) {
    let element = minHeap.extractMin();
    let node = new ListNode(element);
    k.next = node;
    k = k.next;
  }

  return dummyNode.next;
}

console.log(mergeKSortedLists([[1,4,5],[1,3,4],[2,6]]))