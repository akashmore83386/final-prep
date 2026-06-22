// Given a binary tree, a node is "good" if on the path from root to that node, there is no node with a value greater than it.
// Return the count of good nodes.

    //     3
    //    / \
    //   1   4
    //  /   / \
    // 3   1   5

// Look at this path 3 - 1 - 3, the max value seen so far in that path is 3, so is that max value >= root, yes, so that is a good node
// Now look at the 3 - 1, the max value seen so far is 3, is 1 >= 3? No that means it is not a good node.

// Now look at the 3 - 4, max value seen so far is 4, is 4 >= 3 yes, so that is also a good node

function solve(root) {
    if(!root) return 0

    let count = 0

    function dfs(node, maxSeenSoFar) {
        if(!node) return 0

        maxSeenSoFar = Math.max(maxSeenSoFar, node.val)

        // for the current node
        if(node.val >= maxSeenSoFar) count++

        dfs(node.left, maxSeenSoFar)
        dfs(node.right, maxSeenSoFar)
    }

    dfs(root, root.val)

    return count
}

// Complexity:

// Time: O(n) — every node visited once
// Space: O(h) — recursion stack

