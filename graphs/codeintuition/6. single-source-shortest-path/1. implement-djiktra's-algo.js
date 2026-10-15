// Single Source Shortest Path (Dijkstra's Algorithm)

const { MinPriorityQueue, PriorityQueue } = require("@datastructures-js/priority-queue");

// What is the problem? Imagine my house is on fire. I need to find the SHORTEST distance to ALL fire stations so I can call the closest one. 
// Can I just use my standard BFS radar? 
// Well, if all roads take exactly 1 minute to drive, YES! BFS checks Ring 1 (depth 1), then Ring 2. 
// BUT what if the roads have weights (traffic)? 
// Node A -> Node B is 1 hop, but takes 50 minutes. 
// Node A -> Node C -> Node B is 2 hops, but takes 10 minutes total! 
// Standard BFS would pick the 50-minute route just because it has fewer hops (depth 1). That's wrong!

// So how do we tackle this?
// We upgrade our BFS! Instead of a regular Queue (First In, First Out), we use a Minimum Priority Queue (Smallest Distance Out First).
// We also need an array to track the absolute `shortestDistances` to every node.

// The "Dead Pair" Magic Trick:
// If I find a path to Node B that takes 50 mins, I push [50, B] to the queue. 
// Later, I find a path to Node B that takes 10 mins. I don't waste time searching the queue to delete the 50. 
// I just throw [10, B] into the queue! Since 10 is smaller, the Priority Queue naturally bubbles it to the top. 
// When the old [50, B] eventually pops out later, I just check my tracker, say "Hey, I already found a 10-minute route, this 50 is garbage!", and I ignore it.

function dijkstra(graph, source) {
    const n = Object.keys(graph).length
    // 1. Setup our distance tracker. Everything is Infinity initially, because we haven't reached them yet.
    const distances = new Array(n).fill(Infinity);

    // The distance from the source to itself is always 0!
    distances[source] = 0;

    // 2. Setup our Min Priority Queue. It will hold arrays of [current_distance, node]
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);

    // Push the starting node into the PQ
    pq.enqueue([0, source]);

    while (pq.size() > 0) {
        // In JavaScript, since we don't have a real Priority Queue, we sort it descending and pop the smallest from the end.
        // (Note: In a FAANG interview, you mention this is O(N log N) but you'd use a real MinHeap O(log N) in production).
        // pq.sort((a, b) => b[0] - a[0]); 
        const [currentDist, currNode] = pq.dequeue();

        // THE DEAD PAIR CHECK:
        // If the distance we just popped is GREATER than the best distance we already recorded, it's an old dead pair. Ignore it!
        if (currentDist > distances[currNode]) continue;

        // Now, check all neighbors of the current node
        // graph[currNode] will look like: [ [neighbor, weight], [neighbor, weight] ]
        for (let [neighbor, weight] of graph[currNode] || []) {

            // Calculate the time it takes to get to this neighbor VIA our current node
            let newDistToNeighbor = currentDist + weight;

            // If this new route is FASTER than the neighbor's currently recorded best route...
            if (newDistToNeighbor < distances[neighbor]) {

                // UPDATE the tracker with the new better time!
                distances[neighbor] = newDistToNeighbor;

                // Push this new, better route into the Priority Queue!
                pq.enqueue([newDistToNeighbor, neighbor]);
            }
        }
    }

    // Finally, return the array of shortest distances from the source to all nodes
    return distances.map(dist => dist === Infinity ? -1 : dist);
}

// Example Graph (Adjacency List with Weights)
// 0 connects to 1 (weight 4) and 2 (weight 1)
// 2 connects to 1 (weight 2)
const graph = {
    0: [[1, 4], [2, 1]],
    1: [],
    2: [[1, 2]]
};

// Start at node 0, total 3 nodes
console.log("Shortest distances from Node 0:", dijkstra(graph, 0));
// Output: [0, 3, 1]
// (Node 0 is 0 away. Node 1 is 3 away via Node 2. Node 2 is 1 away.)

// TC - O(E * log E) because in the worst case, we push every edge into the Priority Queue, and inserting into a PQ takes log(E) time.
// SC - O(E) because our Priority Queue can hold up to E edges at once in the worst case (with all the dead pairs).