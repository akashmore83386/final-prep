function buildGraphAM(edges, n) {
  // 1. Create an n x n matrix filled with 0s
  let adj = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let edge of edges) {
    const source = edge[0];
    const dest = edge[1];

    // 2. Mark the connection with a 1
    // Update both ways for an undirected graph
    adj[source][dest] = 1;
    adj[dest][source] = 1;
  }

  return adj;
}

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
];
const n = 5; // number of nodes (0 to 4)

console.log(buildGraphAM(edges, n));