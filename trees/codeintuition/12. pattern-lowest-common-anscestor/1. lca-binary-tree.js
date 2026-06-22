function lowestCommonAncestor(root, nodeA, nodeB) {
    // base case 1: null node
    if(!root) return null
    
    // base case 2: current node is one of our targets
    if(root === nodeA || root === nodeB) return root
    
    // recurse left and right
    let leftLCA = lowestCommonAncestor(root.left, nodeA, nodeB)
    let rightLCA = lowestCommonAncestor(root.right, nodeA, nodeB)
    
    // if both found
    if(leftLCA && rightLCA) return root

    // if only one is found we return the first value which not null
    return leftLCA || rightLCA
}

// COMPLEXITY
// Time: O(N)
// We visit every node exactly once. No shortcuts — we have to check the whole tree because our targets could be anywhere.
// Space: O(N)
// The recursion stack. In the worst case (skewed tree), we go N levels deep. In a balanced tree it's O(log N).


// 🧠 The LCA Cheat Sheet
// 1. It's always postorder
// Left → Right → Root. Always. Because you need answers from BOTH children before deciding at the current node.
// 2. The 4-case table — memorise this
// leftLCArightLCAReturnnullnullnullnot nullnullleftLCAnullnot nullrightLCAnot nullnot nullcurrent node
// 3. The two base cases — never forget these

// Hit null → return null
// Hit a target node → return it immediately, don't go deeper

// 4. The one clarifying question to always ask in interviews
// "Are both nodes guaranteed to exist in the tree?"

// If YES → classic solution ✅
// If NO → you need extra logic to verify both were actually found

// 5. The core intuition in one line

// "If targets split across left and right — current node is the LCA. If they're both on one side — bubble that side up."