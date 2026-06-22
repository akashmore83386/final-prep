function bfs(graph, startNode) {
  const queue = [startNode];
  const visited = new Set([startNode]);
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift(); // Remove from front of queue
    result.push(node);

    // Look at all neighbors of the current node
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Mark as visited right when queuing
        queue.push(neighbor); // Add to back of queue
      }
    }
  }
  return result;
}

const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2, 4],
  4: [3],
};

console.log("BFS Order:", bfs(graph, 0)); // Output: [0, 1, 2, 3, 4]
