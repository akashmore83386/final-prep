function levelOrder(root) {
    // edge case: empty tree
    if (root === null) return []

    const queue = [root]
    const result = []

    while (queue.length) {
        // how many nodes are on THIS level right now
        const levelSize = queue.length
        const levelNodes = []

        // process EXACTLY levelSize nodes — no more, no less
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift()

            // collect this level's values
            levelNodes.push(current.val)

            // add next level's nodes to queue
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        // one full level done — push it into result
        result.push(levelNodes)
    }

    return result
}