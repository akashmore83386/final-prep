// Given the root of a binary search tree and a range represented by low and high, write a function to find and return the diameter of the subtree formed by nodes whose values lie in the inclusive range [low, high].

// It is guaranteed that if a node's value is outside [low, high], all nodes in its left and right subtrees are also out of range.
// The diameter of a binary tree is the longest distance between any two nodes in the tree, whether or not they pass through the root. The distance here is defined by the number of edges in the path.

// Input: root = [4, 2, 5, 1, 3, null, 6], low = 2, high = 5
// Output: 3
// Explanation: The diameter of the subtree is shown in the diagram.

// Input: root = [5, 1, 8, null, null, 6, 9], low = 6, high = 9
// Output: 2
// Explanation: The diameter of the subtree is shown in the diagram.

function solve(root, low, high) {
    let maxDiameter = 0

    function dfs(node) {
        if(!node) return 0

        if(node.val < low) return dfs(node.right)
        if(node.val > high) return dfs(node.left)

        let left = dfs(node.left)
        let right = dfs(node.right)

        // update maxDiameter
        maxDiameter = Math.max(maxDiameter, left + right)

        // return height to parent
        return 1 + Math.max(left, right)
    }

    dfs(root)
    return maxDiameter
}