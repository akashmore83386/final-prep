// This is a book question - // [images/7. aligned-chain_2026-04-22-13-24-34.png]
// A node is aligned if node.val === its depth. Find the longest chain of consecutive aligned nodes.

//           (7)           <-- Depth 0
//          /   \
//       [1]     (3)       <-- Depth 1
//       /  \      \
//     [2]  (8)    [2]     <-- Depth 2
//     / \         / \
//   (4) [3]     [3] [3]   <-- Depth 3

function solve(root) {
    if(!root) return 0

    let chain = 0

    function dfs(node, depth, longestChain) {
        if(!node) return 0

        // At the root node, we do have the depth as 0, so we are going to check if that if current node valus is equal to depth or not
        if(node.val == depth) {
            longestChain++
        } else {
            longestChain = 0
        }

        chain = Math.max(chain, longestChain)

        dfs(node.left, depth + 1, longestChain)
        dfs(node.right, depth + 1, longestChain)
    }

    dfs(root, 0, 0)

    return chain
}

// 1. we need to find the node which has the same value as of its depth. So 7 is not equal to 0, so then 7 will pass down the longestChain as 0 to child recursively
// 2. Then child nodes 1, 3 will receive the longestChain as 0, they will also check if there value matches to the depth, now 1 matches to depth 1. SO now we update the longestChain parameter by one so longestChain becomes 1
// 3. Now 2nd node will pass the value to the child nodes 


// Complexity:

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack0