function BFSTraversal(adjList) {
  if (!adjList || adjList.length === 0) return [];

  let result = []
  let visited = new Set()

  for (let i = 0; i < adjList.length; i++) {
    let startNode = Number(i)

    if (!visited.has(startNode)) {
      const queue = [startNode]
      visited.add(startNode)

      while (queue.length > 0) {
        const curr = queue.shift()
        result.push(curr)

        for (let neighbor of adjList[curr] || []) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor)
            queue.push(neighbor)
          }
        }
      }
    }
  }

  return result
}

const edges = [[1, 2], [4], [3], [0], [2, 3]]

console.log(BFSTraversal(edges))

// function BFS(graph, startNode) {
//   // Add startNode in the queue
//   const queue = [startNode]

//   // Add the startNode in the visited set
//   const visited = new Set([startNode])

//   // Result array for the final output
//   const result = []

//   // run a loop
//   while (queue.length > 0) {
//     // remove the node from the front
//     const node = queue.shift()

//     // push the removed node in the result
//     result.push(node)

//     // check the neighbor of removed node
//     for (let neighbor of graph[node]) {
//       // If not in the visited set then add in the visited set and add back to queue
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor)
//         queue.push(neighbor)
//       }
//     }
//   }

//   return result
// }

// // this is the graph that we are getting, we need to run DFS on this
// const graph = {
//   0: [1, 2],
//   1: [0, 3],
//   2: [0, 3],
//   3: [1, 2, 4],
//   4: [3],
// };

// console.log(BFS(graph, 0))