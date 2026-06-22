// Given the root of a binary tree, write a function to find and return the second minimum value in the tree. If there is no second minimum value, return -1.

// Input: root = [1, 2, 5, 7, null, null, 3]
// Output: 2
// Explanation: The second minimum value in the given tree is 2.

// Input: root = [1, 8, 4, null, null, 9, 7]
// Output: 4
// Explanation: The second minimum value in the given tree is 4.

var findSecondMinimumValue = function (root) {
    let array = []

    function dfs(node) {
        if (!node) return

        array.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return getSecondSmaller(array, root.val)
};

function getSecondSmaller(array, minVal) {
    let secondSmaller = Infinity;

    for (let i = 0; i < array.length; i++) {
        // We only care about values strictly greater than the root's value
        if (array[i] > minVal && array[i] < secondSmaller) {
            secondSmaller = array[i];
        }
    }

    // LeetCode expects -1 if no second minimum is found
    return secondSmaller === Infinity ? -1 : secondSmaller;
}