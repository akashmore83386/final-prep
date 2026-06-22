// If you have 1000 cities but most cities only connect to 3-4 others — which representation wastes less memory? The hashmap or the 2D grid? And WHY?

// Adjacency Matrix — always allocates N×N space. 1000 cities = 1,000,000 cells. Even if only 3,000 flights exist. That's massive waste.
// Adjacency List (your hashmap) — only stores what actually exists. 1000 cities, 3000 flights = only 3000 entries stored. That's it.

// So the rule of thumb is:
// SituationUseDense graph (lots of edges)Adjacency MatrixSparse graph (few edges)Adjacency List FAANG interviews (almost always)Adjacency List

// In 95% of interview problems you'll use the Adjacency List. Keep that in your head permanently.

function buildGraph(edges, n) {
  const map = new Map();

  for (let edge of edges) {
    const source = edge[0];
    const dest = edge[1];

    // initialise the adjacency list for the source if not present
    if (!map.has(source)) map.set(source, []);

    // initialise the adjacency list fro the des if not present
    if (!map.has(dest)) map.set(dest, []);

    // add both directions (unidirected graph)
    map.get(source).push(dest);
    map.get(dest).push(source);
  }

  return map;
}

// Edges given as pairs: [source, destination]
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
];
const n = 5; // number of nodes (0 to 4)

console.log(buildGraph(edges, n))