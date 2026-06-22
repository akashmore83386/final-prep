// Inorder of BST A gives sorted array A. Inorder of BST B gives sorted array B. Now how do you merge two sorted arrays into one sorted array?

// This is exactly the two pointer pattern — but instead of moving toward middle, you always pick the SMALLER value. Can you write the while loop logic?

function solve(rootA, rootB) {
    let left = new ForwardIterator(rootA)
    let right = new ForwardIterator(rootB)

    let leftNode = left.next()
    let rightNode = right.next()

    let result = []

    // pick smaller of two, advance that iterator
    while(leftNode && rightNode) {
        if(leftNode.val < rightNode.val) {
            result.push(leftNode.val)
            leftNode = left.hasNext() ? left.next() : null
        } else {
            result.push(rightNode.val)
            rightNode = right.hasNext() ? right.next() : null
        }
    }

    // drain remaining nodes from tree A
    while(leftNode) {
        result.push(leftNode.val)
        leftNode = left.hasNext() ? left.next() : null
    }

    // drain remaining nodes from tree B
    while(rightNode) {
        result.push(rightNode.val)
        rightNode = right.hasNext() ? right.next() : null
    }

    return result
}