// Given the root of a binary tree, write a function to return a list of lists containing its diagonal traversal.

// A diagonal traversal of a binary tree traverses the tree from top to bottom along diagonals, starting from the top-rightmost node and moving towards the bottom-left. In this traversal, all nodes lying on the same diagonal are processed together before moving to the next diagonal.

// Input: root = [1, 2, 3, 4, null, null, 7]
// Output: [[1, 3, 7], [2], [4]]
// Explanation: The diagonal traversal of the given tree is shown in the diagram above.

// Input: root = [1, 8, 4, null, 6, null, null, 3, 2]
// Output: [[1, 4], [8, 6, 2], [3]]
// Explanation: The diagonal traversal of the given tree is shown in the diagram above.

//         1          ← diagonal 0
//        / \
//       2   3        ← 2 is diagonal 1, 3 is diagonal 0
//      /       \
//     4          7   ← 4 is diagonal 2, 7 is diagonal 0

// Go RIGHT → same diagonal (diagonal stays same)
// Go LEFT  → next diagonal (diagonal + 1)

// Output: [[1,3,7], [2], [4]] ✅

function diagonalTraversal(root) {
    if(!root) return []
    
    const queue = [[root, 0]]  // [node, diagonal]
    const diagMap = new Map()
    
    while(queue.length) {
        const [node, diag] = queue.shift()
        
        // store node in its diagonal group
        if(!diagMap.has(diag)) diagMap.set(diag, [])
        diagMap.get(diag).push(node.val)
        
        // left child → diagonal + 1 (new diagonal!)
        if(node.left)  queue.push([node.left,  diag + 1])
        
        // right child → same diagonal!
        if(node.right) queue.push([node.right, diag])
    }
    
    // sort by diagonal number and return
    return [...diagMap.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([diag, vals]) => vals)
}

// The ONLY difference from vertical traversal:

// Vertical    → left: col-1, right: col+1
// Diagonal    → left: diag+1, right: diag (same!)