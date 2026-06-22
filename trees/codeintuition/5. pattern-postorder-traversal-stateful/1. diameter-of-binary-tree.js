function diameterOfBinaryTree(root) {
    // if the given tree is empty we return 0
    if(!root) return 0

    // global variable
    let maxDiameter = 0

    function height(node) {
        if(!node) return 0

        // we need to get the height of the left and right of the current node. Because diameter will be leftHeight + rightHeight
        let leftHeight = height(node.left)
        let rightHeight = height(node.right)

        // need to update the max diameter global variable at the current node
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight)

        // we need to return the height of the current node to parent, so parent can also update the diameter value
        return 1 + Math.max(leftHeight, rightHeight)
    }

    height(root)

    return maxDiameter
}

// Q1: Children return HEIGHT upward ✅
// Q2: Global = maxDiameter, tracks longest path seen ✅  
// Q3: Return HEIGHT to parent, Update maxDiameter globally ✅

// // Phase 1 (Stateless) - just return
// return 1 + Math.max(left, right)

// // Phase 2 (Stateful) - update global THEN return
// maxDiameter = Math.max(maxDiameter, left + right)  // ← extra step!
// return 1 + Math.max(left, right)