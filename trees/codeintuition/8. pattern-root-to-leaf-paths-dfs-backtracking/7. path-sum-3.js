var pathSum = function(root, targetSum) {
    let count = 0
    const map = new Map()
    map.set(0, 1)  // empty path has sum 0

    function dfs(node, currentSum) {
        if(!node) return

        currentSum += node.val

        // how many ancestors had prefixSum = currentSum - targetSum?
        count += map.get(currentSum - targetSum) || 0

        // add current sum to map
        map.set(currentSum, (map.get(currentSum) || 0) + 1)

        dfs(node.left,  currentSum)
        dfs(node.right, currentSum)

        // backtrack!
        map.set(currentSum, map.get(currentSum) - 1)
    }

    dfs(root, 0)
    return count
}