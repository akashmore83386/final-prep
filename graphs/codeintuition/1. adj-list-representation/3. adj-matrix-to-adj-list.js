// The Mental Model: Reading the Spreadsheet
// We are taking the giant Spreadsheet (Adjacency Matrix) and condensing it back into a space-efficient Address Book (Adjacency List).

// Instead of starting with the edges we know exist, we are forced to check every single cell in the spreadsheet.

// Go to Row 0. Look at Column 0, then Column 1, then Column 2...

// If you see a 0, just keep walking.

// If you see a 1 at Row u and Column v, write down v on page u of your address book.

function matrixToList(adjMatrix) {
    const V = adjMatrix.length;
    
    // 1. Create the empty Address Book
    // We create an array of length V, and fill each slot with a new empty array.
    const adjList = Array.from({ length: V }, () => []);
    
    // 2. Scan every row (the "From" node)
    for (let u = 0; u < V; u++) {
        
        // 3. Scan every column in that row (the "To" node)
        for (let v = 0; v < V; v++) {
            
            // 4. If we find a connection (a 1), add it to the book!
            if (adjMatrix[u][v] === 1) {
                adjList[u].push(v);
            }
        }
    }
    
    return adjList;
}

// Complexity Analysis (The "Gotcha")Time Complexity: $O(V^2)$Even if the graph is completely empty (no edges at all), you still have to check every single cell in the $V \times V$ matrix to confirm it's empty. This is the main disadvantage of an Adjacency Matrix!Space Complexity: $O(V + E)$We are building an Adjacency List from scratch. The list holds an array for every vertex ($V$), and the total number of items pushed into all those inner arrays is exactly equal to the total number of edges ($E$).