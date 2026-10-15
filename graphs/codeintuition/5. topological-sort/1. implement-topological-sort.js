// The Topological Sort Secret: We don't add the node to our list when we enter. We wait until we have completely explored every single neighbor, and we only add it to our list at the exact moment we exit the room.

// If Node A points to Node B (A -> B), the DFS will go into A, then go into B. B has no neighbors, so B finishes first and exits. We write down B. Then A finishes and exits. We write down A.
// Our list says: [B, A].
// Because we wrote them down on the exit, the list is perfectly backwards! We just .reverse() it at the end to get [A, B].

// Why this is so elegant:
// Did you notice how similar this is to basic DFS? The only difference is moving result.push(node) from the top of the function to the bottom, and calling result.reverse() at the end. That tiny shift in placement transforms a simple search into a powerful dependency resolution algorithm used by tools like NPM and Webpack!

/**
 * Topological Sort (Using DFS)
 * Returns a valid linear ordering of a Directed Acyclic Graph (DAG).
 */
function topologicalSort(graph) {
  const visited = new Set();
  const result = []; // This will hold our reverse topological order

  function dfs(node) {
    // 1. Mark node as permanently visited
    visited.add(node);

    // 2. Go as deep as possible into the dependencies first
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    // 3. CRITICAL STEP: The Exit Strategy
    // We only push the node into our result array AFTER we have 
    // completely finished visiting all of its neighbors/dependencies.
    result.push(node);
  }

  // THE GLOBAL SCAN: Run DFS from every unvisited node
  for (let node in graph) {
    let curr = Number(node);
    if (!visited.has(curr)) {
      dfs(curr);
    }
  }

  // 4. Because we pushed nodes upon "exit", the array is backwards. 
  // We just reverse it to get the correct order!
  return result.reverse();
}

// Example: 
// 0 -> 1
// 0 -> 2
// 1 -> 3
// 2 -> 3
// (0 must happen before 1 and 2. 1 and 2 must happen before 3)
const graph = {
  0: [1, 2],
  1: [3],
  2: [3],
  3: []
};

console.log("Topological Order:", topologicalSort(graph)); 
// Output: [0, 2, 1, 3] or [0, 1, 2, 3]