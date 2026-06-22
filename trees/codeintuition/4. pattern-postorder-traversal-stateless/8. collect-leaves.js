// Given the root of a binary tree, write a function to return a list of lists containing the leaves of this binary tree. The leaves must be collected in the following order.

// Collect all the leaves of the binary tree from left to right.
// Remove all the leaves of this binary tree.
// Repeat the above process until the tree is empty.


// So the output looks like this:

//         1
//        / \
//       2   3
//      / \
//     4   5

// Round 1 → collect [4, 5, 3] → remove them
// Round 2 → collect [2]       → remove them  
// Round 3 → collect [1]       → remove them

// Result: [[4,5,3], [2], [1]]

// [images/8. collect-leaves_2026-04-19-17-30-14.png]

// approach - // [images/8. collect-leaves_2026-04-19-17-49-14.png]

function findLeaves(root) {
    const result = []
    
    function height(node) {
        // null case → return what?
        if(!node) return -1
        
        // get left and right heights
        let leftHeight = height(node.left)
        let rightHeight = height(node.right)
        
        // calculate current node height
        let h = 1 + Math.max(leftHeight, rightHeight)
        
        // push node.val into result[h]
        if(result[h] === undefined) result[h] = []
        result[h].push(node.val)
        
        // return height upward
        return h
    }
    
    height(root)
    return result
}

//         1
//        / \
//       2   3
//      / \
//     4   5

// height(4) → h=0 → result[0]=[4] → return 0
// height(5) → h=0 → result[0]=[4,5] → return 0
// height(2) → h=1 → result[1]=[2] → return 1
// height(3) → h=0 → result[0]=[4,5,3] → return 0
// height(1) → h=2 → result[2]=[1] → return 2

// result = [[4,5,3], [2], [1]] ✅

// "Height = collection round. Use height as array index to group nodes automatically!"