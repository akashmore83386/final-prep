// 1. null returns 0
// 2. Each node checks left and right chains
// 3. If child.val === node.val → extend chain
//    If child.val !== node.val → reset to 0
// 4. Update global: longestPath = left chain + right chain
// 5. Return to parent: max(leftChain, rightChain) + 1
//    (can only extend ONE side to parent!)

function solve(root) {
    let longest = 0

    function dfs(node) {
        if(!node) return 0

        let left  = dfs(node.left)
        let right = dfs(node.right)

        // extend chain only if values match
        let leftChain  = (node.left  && node.left.val  === node.val) ? left  + 1 : 0
        let rightChain = (node.right && node.right.val === node.val) ? right + 1 : 0

        // update global: path THROUGH current node
        longest = Math.max(longest, leftChain + rightChain)

        // return to parent: best single chain
        return Math.max(leftChain, rightChain)
    }

    dfs(root)
    return longest
}