// Given the root of a binary tree, write a function that returns true if the tree represents a valid min heap and returns false otherwise.

//         1
//     2       3
// 4      5 6     7

// output - true

function solve(root) {
    if (!root) return true;

    // Step 1: Check if tree is a Complete Binary Tree
    if (!checkCBT(root)) return false;

    // Step 2: Check min heap property recursively
    return checkMinHeap(root);
}

function checkMinHeap(root) {
    // Base case: leaf node or null — nothing to violate
    if (!root) return true;

    // If left child exists and parent is greater — violation!
    if (root.left && root.val > root.left.val) return false;

    // If right child exists and parent is greater — violation!
    if (root.right && root.val > root.right.val) return false;

    // Current node is fine — now check subtrees
    return checkMinHeap(root.left) && checkMinHeap(root.right);
}

function checkCBT(root) {
    if (!root) return true;

    let queue = [root];
    let seenNull = false;

    while (queue.length) {
        const current = queue.shift();

        if (current === null) {
            seenNull = true;
            continue;
        }

        // If we see a real node after a null — not a CBT
        if (seenNull) return false;

        queue.push(current.left);
        queue.push(current.right);
    }

    return true;
}