// 2. Directed Graphs: "The Breadcrumb Trail"

// The Rule: Edges are one-way streets.

// The Problem: You can have paths that merge together without forming a circle (e.g., A ➔ B ➔ C, and A ➔ D ➔ C). If you take the top path, C gets marked as visited. If you take the bottom path and hit C, it's already visited. But there is no circle! You just hit a dead end twice.

// The Fix: A standard visited set is not enough. We need a second set called nodesInPath (or "The Breadcrumb Trail"). You drop a breadcrumb when you step on a node, and you pick it back up when you backtrack.

// The Condition: You only have a cycle if you step on a node that currently has a breadcrumb on it (nodesInPath.has(neighbor)).

// Cycle in the directed graph

// we need to detect the cycle in the directed graph

// Now since here will be the 1 way connection between the nodes, it is somewhat difficult for us to check if indeed valid or not...because let's look at the below example which is not cycle

//     A
//   ↙   ↘
//  B     D
//   ↘   ↙
//     C

// Our path is A -> B -> C, we hit the dead end at C, we can not move further to C, so we backtrack from C, come back to A and explore another path which is A -> D -> C, so it is not the cycle, we just found out the 2 new ways to reach to the dead end which is C!

// So that is why even though it looks like a cycle but because of the directed nature of the graph it is not the valid cycle, if it could be the undirected graph or if we have run the undirected cycle detection function on the above example we would have returned true!

// Now then how can we detect the cycle in the directed graph? Well, with addition to the visited track, we can have additional set which is nodesInPath, as soon as we encountered the node we put that in the visited set and also put that in the nodesInPath, once we hit the dead end, we backtrack which means we delete node from nodesInPath and explore other path...so let's check this example, which is the valid cycle A -> B -> C -> A

// We first check node A, put that in the visited and also in the nodesInPath, then we do the same with B, then we do the same with the C, then we again encounter the A, we check if it is in the visited, YES, it is, we check if A is in the nodesInPath, Yes, it is, so we found the cycle!!

// Now again check this our original example - 

//     A
//   ↙   ↘
//  B     D
//   ↘   ↙
//     C

// We encountered A, we added in the visited and nodeInPath, we do the same thing for B, we do the same thing for C, now at the C we hit the dead end, as soon as we hit the dead end, we backtrack, we removed the C from nodesInPath, we removed the B from nodesInPath and we reached the A to explore another path, we then check D, add that in the visited and also in the nodesInPath, now at this moment the nodesInPath is [A, D], we then check C, now we hit the dead end and also this C is not in the nodesInPath that means there is no cycle!

function directedGraphCycle(graph) {
  const visited = new Set()
  const nodesInPath = new Set()

  function dfs(node) {
    visited.add(node)
    nodesInPath.add(node)

    for (let neighbor of graph[node] || []) {
      // we run the dfs deeply if not visited
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true
      }
      // if neighbor is in visited set and also in the nodesInPath, then it is the cycle
      else if (nodesInPath.has(neighbor)) {
        return true
      }
    }

    nodesInPath.delete(node)

    return false
  }

  for (let node in graph) {
    let curr = Number(node)
    if (!visited.has(curr)) {
      if (dfs(curr)) return true
    }
  }

  return false
}

const graph = [[1, 2], [4], [3], [0], [2, 3]]

console.log(directedGraphCycle(graph))

// Worst Case: The graph does not have any cycle

// Space Complexity - O(N)
// Time Complexity - O(N+E)
