// The Use Cases: List vs. MatrixIn a Google interview, the problem description usually hands you the graph in one of three ways:The Adjacency List (The undisputed king): You will use this for 95% of graph problems. It is perfectly optimized for DFS and BFS because when you are standing on Node 2, you only want to look at Node 2's actual neighbors. You don't want to waste time checking nodes it doesn't connect to.The Adjacency Matrix (The heavy duty checker): You rarely use this for standard traversals because it wastes time checking 0s. You only use a Matrix if the interviewer asks a question that requires you to instantly check: "Is there a direct road between City A and City Z?" (Answering that takes $O(1)$ time in a matrix, but $O(V)$ time in a list).The Edge List (The puzzle pieces): Often, LeetCode won't give you a list or a matrix at all! They will just give you a list of edges, like [[0,1], [1,2]]. Your very first step in the interview will be to write a loop to convert those puzzle pieces into an Adjacency List before you can even start your DFS/BFS.

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