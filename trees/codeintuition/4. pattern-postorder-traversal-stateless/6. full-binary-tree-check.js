// A full binary tree is a tree where every node has either 0 or 2 children — never just 1!

// Full ✅              Not Full ❌
//         1                   1
//        / \                 /
//       2   3               2
//      / \
//     4   5

// Node 2 has 2 children ✅    Node 1 has only 1 child ❌
// Node 3 has 0 children ✅
// Node 4 has 0 children ✅
// Node 5 has 0 children ✅

function fullBinaryTreeCheck(root) {
    // an empty tree/null, it is considered the full binary tree by default
    if(!root) return true
    
    // for the leaf node's it's already 0 nodes attached to them so return true
    if(!root.left && !root.right) return true

    // If only one child exists then return false
    if(!root.left || !root.right) return false
    
    // if the current node has left and right then get the boolean values of them recursively
    let left = fullBinaryTreeCheck(root.left)
    let right = fullBinaryTreeCheck(root.right)

    return left && right
}

// 🔑 KEY LESSON FROM THIS PROBLEM

// "Always check MORE SPECIFIC conditions before GENERAL ones!"

// && (both null) is more specific than || (at least one null)
// Check specific first, general second!