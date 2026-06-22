// we need to reverse a queue
// Input -  [1, 2, 3, 4, 5, 6, 7]
// Output - [7, 6, 5, 4, 3, 2, 1]

function reverseQueue(queue) {
    if(queue.length === 0) return

    const front = queue.shift()

    reverseQueue(queue)

    queue.push(front)

    return queue
}

console.log(reverseQueue([1, 2, 3, 4, 5, 6, 7]))

// expectation
// reverseQueue(q) // [1, 2, 3, 4]
// [4, 3, 2, 1]

// faith
// reverseQueue(q.shift()) // since we are dealing with queue, we remove from the first, and we get the smaller queue = [2, 3, 4]
// Now once we have that in our reverseQueue function, we are putting faith that it will give us the reversed
// [4, 3, 2]

// combine
// reverseQueue(q) {
//     const front = q.shift() // remove from the front
    
//     reverseQueue(q) // then reverse the queue for remaining elements after removing from front, as per our faith

//     // we add back our removed element at the last of reversed queue
//     q.push(front)

//     return q
// }

// generalise
// What is the smallest valid input? An empty array
// If the queue is empty there is nothing left to reverseQueue
// if(q.length === 0) return;