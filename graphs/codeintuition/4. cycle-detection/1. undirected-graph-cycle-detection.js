// 1. Undirected Graphs: "The Parent Trap"

// The Rule: Edges are two-way streets. If A connects to B, B connects back to A.

// The Problem: If you step from A to B, the DFS will immediately look at B's neighbors. One of B's neighbors is A! It looks like you've hit a visited node, but you just came from there. That is not a cycle; that's just a U-turn.

// The Fix: We pass a parent variable into our DFS. The rule becomes: "If I bump into a node I have already visited, AND that node is NOT my parent, I have walked in a circle!"


// --------------------My understanding----------------------

// Cycle detection in undirected graph

// Suppose the path is like A - B - C, which means the path can exists from A to B, and also B to A, and same way B to C, and C to B, because this is the undirected graph. 

// So if we want to detect the cycle, that means if the path is starting from the node and also ending at the same node, that means the cycle...BUT in the undireted graph, there 2 way A to B, and B to A, so we cannot say that it is the cycle, it is just the U turn!! NOT a cycle!! So how to tackle this problem??

// What we can do is, we can have the visited to track the visited nodes, we can add node, and parent node of it in the DFS function, we are adding the parent node because we can check later in the function that if I ever encountered any node that is already visited and that is not my parent node that means I have found the CYCLE!! SO in simple words, I need the parent node to compare later on if any other node which I encountered and that is in the visited set but that is not my parent node, that certainly is my CYCLE. Because it is the common sense that if the node is in the visited and is equal to the parent that means that it is just the U turn and not the parent.

function detectCycleUndirected(graph) {
    const visited = new Set()

    function dfs(node, parent) {
        visited.add(node)

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                // passing current node as the parent
                if (dfs(neighbor, node)) {
                    return true
                }
                // Main condition: If neighbor is visited and it is not equal to parent node of my main/current/node, that means cycle detected
            } else if (neighbor !== parent) {
                return true
            }
        }

        return false
    }

    // We need to start off our DFS
    for (let node in graph) {
        let curr = Number(node)

        if (!visited.has(curr)) {
            // For the very first node, there is no parent so we add -1 or null
            if (dfs(curr, -1)) return true
        }
    }

    return false
}

const graph = [[1, 2], [0, 4], [0, 3], [2, 4], [1, 3]]

console.log(detectCycleUndirected(graph))

// Worst Case: The graph does not have any cycle

// Space Complexity - O(N)
// Time Complexity - O(N+E)
