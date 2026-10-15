// Phase 1: The Transformation (Edge List → Adjacency List)
// Right now, you have a pile of scattered puzzle pieces (edges). You cannot run your beautiful DFS or BFS code on this pile. You must first organize it into your preferred Address Book (an Object-based Adjacency List).

// We want to create an empty object: const graph = {};
// Then, we want to loop through every edge in the edges array.

// Here is your first challenge, keeping in mind that this is an undirected graph.

// If you are looping through the edges array and you are currently looking at the edge [0, 1], what exact JavaScript logic would you write to add this relationship into your graph object so that both node 0 and node 1 know they are connected?

function validPath(n, edges, source, destination) {
    // I have converted the edges into the adjList
    const adjList = buildGraph(edges, n)

    // Now we are going to use the DFS traversal to check if the path exists from source to destination

    // set to track visited nodes to avoid the infinite loops
    const visited = new Set()

    // recursive function
    function traverse(node) {
        // Base case 1: We found the target
        if (node === destination) return true

        // Base case 2: We have alread checked this node, dead end
        if (visited.has(node)) return false

        // Mark current node as visited
        visited.add(node)

        // explore all neighbors deeply
        for (let neighbor of adjList.get(node) || []) {
            // THE MAGIC TRICK: 
            // If any neighbor path returns true, immediately pass that true 
            // all the way up the chain! Don't bother checking other neighbors.
            if (traverse(neighbor)) {
                return true;
            }
        }

        // if we checked every neighbor and none of them found the destination
        return false
    }

    return traverse(source)
}

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

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))