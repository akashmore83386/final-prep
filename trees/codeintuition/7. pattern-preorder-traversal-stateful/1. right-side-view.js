// Given a binary tree, return the values of the nodes you can see from the right side (one node per level — the rightmost one).

//         1
//        / \
//       2   3
//      / \
//     4   5

// Output: [1, 3, 5]

// When we look from the right side, we have to return those values in the array, whatever values we are seeing. SO that means we will first look at first level, then second level and so on.

// That means the information is passing down from the root to children. So 1 will pass the info to child, then child 2, 3 will pass the info to their child

// What is this info? At root, I will be on the level 0, so I will be calling my dfs with the root and also pass the 0 as parameter for the level. THEN when I will be calling recursively children I will be passing the depth + 1

function solve(root) {
    if(!root) return []

    let res = []

    function dfs(node, depth) {
        if(!node) return

        if(depth === res.length) {
            res.push(node.val)
        }

        dfs(node.right, depth + 1)
        dfs(node.left, depth + 1)
    }

    dfs(root, 0)

    return res
}

// COMPLEXITY:
// Time → O(n) — we visit every node exactly once
// Space → O(h) — recursion stack goes as deep as the height of the tree. Worst case (skewed tree) → O(n). Best case (balanced) → O(log n)