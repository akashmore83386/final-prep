// Given the root of a binary tree, update each node’s value to the integer represented by concatenating all digits from the root to that node.

// Input: root = [1, 2, 3, 4, null, null, 7]
// Output: [1, 12, 13, 124, null, null, 137]
// Explanation: After updating each node's value to the integer represented by concatenating all digits from the root to that node, we get the tree shown above.

// Input: root = [1, 10, 20, null, null, 211, 7]
// Output: [1, 110, 120, null, null, 120211, 1207]
// Explanation: After updating each node's value to the integer represented by concatenating all digits from the root to that node, we get the tree shown above.


function solve(root) {
    if(!root) return 0

    function dfs(node, string) {
        if(!node) return 0

        string = string + String(node.val)
        node.val = Number(string)

        dfs(node.left, string)
        dfs(node.right, string)
    }

    dfs(root, '')

    return root
}

// Parent will be passing its value to the children. AND chiildren will be receiving the value from the parent, and that will be string values. 

    //         1
    //     2       3
    // 4               7

// SO initially for the root when we call the dfs we are passing the parameter as it's value. THEN we need to convert that in the string, add concatenation logic, call the left and right recursively and then that concatenated result need to return to the child

// Complexity:

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack depth, O(log n) balanced, O(n) skewed