function dfs(graph, startNode) {
  const visited = new Set();
  const result = [];

  function traverse(node) {
    // Base Case: If node doesn't exist or has been visited, turn back
    if (node === undefined || visited.has(node)) return;

    visited.add(node); // Mark node as visited
    result.push(node);

    // Recursively visit all unvisited neighbors deeply
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  }

  traverse(startNode);
  return result;
}

const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2, 4],
  4: [3],
};

console.log("DFS Order:", dfs(graph, 0)); // Output: [0, 1, 3, 2, 4] (order can vary depending on neighbor array order)