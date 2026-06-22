// We are given a linkedlist, we need to reverse it

export class Solution {
  // Add 'prev = null' as a default parameter to accumulate the reversed list
  reverseAList(head, prev = null) {
    // Generalise (Base Case)
    if (head === null) {
      return prev;
    }

    // Save the next node before we overwrite head.next
    let nextNode = head.next;

    // Combine step: Flip the pointer to point backward
    head.next = prev;

    // Faith step: Tail recursion! Pass the baton to the next node
    return this.reverseAList(nextNode, head);
  }
}

// expectation
// given list: 5 -> 7 -> 3 -> null
// reverseList(head, prev = null) should flip all the pointers, and return the new head, 3 -> 7 -> 5 -> null

// faith
// 1. We isolate the current head node (5).
// 2. We save the rest of the list so we don't lose it: let nextNode = head.next (7 -> 3 -> null)
// 3. We point our current node backward: head.next = prev (5 now points to null)
// Now, 'head' (5 -> null) becomes our new 'prev' list!
//
// We take a leap of FAITH that calling reverseAList with the remaining nodes and our updated 'prev':
// reverseAList(7 -> 3 -> null, 5 -> null)
// will successfully finish reversing everything and return the final head node (3).

// combine
// Tail recursion! We don't do any work after the recursive call.
// Whatever the faith step returns is our final answer.
// return this.reverseAList(nextNode, head)

// generalise
// What is the smallest possible input / when do we stop?
// When we run out of nodes to reverse (head === null).
// At that point, 'prev' is holding the head of our beautifully reversed list!
// if (head === null) return prev;