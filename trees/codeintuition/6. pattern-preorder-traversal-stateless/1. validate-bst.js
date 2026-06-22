//         2
//     1       3

// at every node we need to check if the left node is less than the current node and right node value is bigger then the current node

// So 1 is less than 2 and 3 is bigger than 2, that means it is valid BST

//     5
// 1       4
//     3       6

// in the above tree the left node's value is 1 which is less than the parent, and right node's value is also greater so that means it is not binary tree.

// SO as per the logic, right side should be parent to any value and left side should be 0 to parent value

function solve(root) {
    return validateBST(root, -Infinity, +Infinity)
}

function validateBST(node, min, max) {
    if(!node) return true

    // check if the node.val is within the limit
    if(node.val <= min || node.val >= max) return false // goes out of bound

    return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max)
}