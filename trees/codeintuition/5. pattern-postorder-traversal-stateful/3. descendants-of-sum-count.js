// For each node, check if node.val === sum of ALL nodes below it. Count how many nodes satisfy this condition.

//         21
//        /  \
//       7    3
//      / \    \
//     5   2    4

// Node 21: descendants sum = 7+3+5+2+4 = 21 ✅ count!
// Node 7:  descendants sum = 5+2 = 7 ✅ count!
// Node 3:  descendants sum = 4 ≠ 3 ❌
// Node 5:  descendants sum = 0 ≠ 5 ❌ (leaf)
// Node 2:  descendants sum = 0 ≠ 2 ❌ (leaf)
// Node 4:  descendants sum = 0 ≠ 4 ❌ (leaf)

// Answer = 2 ✅

function solve(root) {
    // if the given tree is empty
    if(!root) return 0

    // global variable
    let count = 0

    function dfs(node) {
        if(!node) return 0

        // get the left and right gains for the current node
        let leftGain = dfs(node.left)
        let rightGain = dfs(node.right)

        let totalGain = leftGain + rightGain

        if(totalGain === node.val) count++

        // return the current node's value + left side + right side to the parent
        return node.val + totalGain
    }

    dfs(root)

    return count
}

// 🔑 KEY LESSON

// "Math.max(gain, 0) is ONLY for Max Path Sum — where negative paths hurt you. For sum problems, always take the ACTUAL value!"