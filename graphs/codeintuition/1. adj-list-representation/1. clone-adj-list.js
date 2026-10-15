// Given the adjacency list of a directed graph, write a function to clone this list and return a new list.

// Input: adjList = [[1, 3], [4], [4], [2], [3]]
// Output: [[1, 3], [4], [4], [2], [3]]
// Explanation: Above is the cloned adj list.

// Input: adjList = [[4], [0, 3], [0, 4], [2, 4], [1]]
// Output: [[4], [0, 3], [0, 4], [2, 4], [1]]
// Explanation: Above is the cloned adj list.

function cloneAdjacencyList(adjList) {
    // 1. Create a brand new outer array
    const clonedList = [];
    
    // 2. Iterate through every node in the original list
    for (let i = 0; i < adjList.length; i++) {
        const neighbors = adjList[i];
        
        // 3. Create a brand new inner array for the neighbors
        // The spread operator [...] copies the primitive integer values
        const clonedNeighbors = [...neighbors];
        
        // 4. Store it in our new list
        clonedList.push(clonedNeighbors);
    }
    
    return clonedList;
}

const adjList = [[1, 3], [4], [4], [2], [3]]

console.log(cloneAdjacencyList(adjList))

// Complexity Analysis
// Time Complexity: O(V + E) where V is the number of vertices (nodes) and E is the total number of edges. We have to look at every single node and every single edge to copy them.

// Space Complexity: O(V + E) because we are allocating entirely new memory to store the exact same number of vertices and edges for the cloned graph.