function dfs(graph) {
  const visited = new Set();
  const result = [];

  function traverse(node) {
    // Note: Object.keys() turns keys into strings, so we convert back to Number
    // if our original nodes are integers.
    const curr = Number(node);
    if (visited.has(curr)) return;

    visited.add(curr);
    result.push(curr);

    for (let neighbor of graph[curr] || []) {
      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  }

  // THE GLOBAL SCAN: Check every single node in the graph object
  for (let node in graph) {
    if (!visited.has(Number(node))) {
      traverse(node);
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

console.log("DFS Order:", dfs(graph)); // Output: [0, 1, 3, 2, 4] (order can vary depending on neighbor array order)


// Remember when visiting in the DFS, if we are given the choice we visit the smallest number first when going deep.

// High Value Solution
// function DFSTraversal(graph) {
//   if (!graph || typeof graph !== 'object') return []
//   // We need to output the graph using DFS traversal.

//   // DFS travesal goes deep and if there is no further node to visit it backtracks, it do not visit the same node again.

//   const visited = new Set()
//   const result = []

//   // DFS recursive function, it is going to take the source node
//   function dfs(node) {
//     // as soon as node enters in DFS we mark it to visited and push to result
//     visited.add(node)
//     result.push(node)

//     // If it has 2 paths to go, picks up the smallest one
//     const neighbors = [...graph[node] || []].sort((a, b) => typeof a === 'number' ? a - b : String(a).localeCompare(String(b)))

//     // check its neighbor
//     for (let neighbor of neighbors) {  // [] - because in case node do not have neighbor
//       if (!visited.has(neighbor)) {
//         dfs(neighbor)
//       }
//     }
//   }

//   // we nee to loop over keys, as we are going to push those, and the loop inside the recursive dfs will be the one which will traverse it's neighbors
//   for (let key of Object.keys(graph)) {
//     const node = !isNaN(Number(key)) && key.trim() !== '' ? Number(key) : key;
//     if (!visited.has(node)) {
//       dfs(node);
//     }
//   }

//   return result
// }

// // adjList
// const adjList = {
//   0: [1, 2],
//   1: [0, 3],
//   2: [0, 3],
//   3: [1, 2, 4],
//   4: [3]
// }

// console.log(DFSTraversal(adjList))