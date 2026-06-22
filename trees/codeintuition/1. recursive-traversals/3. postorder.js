// Postorder traversal is the last of the three fundamental techniques for exploring the nodes of a binary tree in a specific left-right-root sequence. This method recursively visits the left subtree, the right subtree, and finally, the root node.

// In what scenarios is postoder traversal useful?
// Postorder traversal is particularly useful in scenarios where nodes must be processed after their descendants, such as in tree deletion operations, evaluating expression trees, and in various applications requiring bottom-up processing like calculating the size of subtrees or evaluating postfix expressions.
// Algorithm
// Postorder traversal of a binary tree is a three-step process. We visit the left subtree, the right subtree, and finally, the root node. Let's look at an example to understand it better.

//         1
//     2       3
//   4   5   6   7

// left - right - root 

// postorder = [4, 5, 2, 6, 7, 3, 1]

function solve(root) {
    const array = []

    function traverse(node) {
        if(root === null) return

        traverse(node.left)

        traverse(node.right)

        array.push(node.val)
    }

    traverse(root)

    return array
}

// Like preorder and inorder traversals, we visit every node only once in the traversal, so the time complexity is always linear.

// The algorithm's space complexity is always O(h), where h is the tree's height. This is because the recursive calls add to the call stack, and the maximum depth of the recursive calls is equal to the tree's height. The best case occurs when the tree is balanced, where the height is logN. However, the worst case occurs when the tree is skewed, resulting in an O(N) space complexity.
