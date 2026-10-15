// The Mental Model: The Address Book vs. The SpreadsheetThink of an Adjacency List as a personal Address Book.You only write down the names of the people you actually know.It's very space-efficient, but if I ask you, "Do you know Bob?", you have to read through your whole list to check.Think of an Adjacency Matrix as a giant Spreadsheet.Every single person has a row, and every single person has a column.You put a 1 if they know each other, and a 0 if they don't.It takes up a lot of space ($V \times V$), but if I ask you, "Do you know Bob?", you instantly look at your row and Bob's column.Your goal is to translate the Address Book into the Spreadsheet.The ApproachFind the Dimensions: Look at the length of the adjList. This tells you how many nodes (vertices) there are in the graph. Let's call this $V$.Build the Empty Spreadsheet: Create a 2D array (matrix) with $V$ rows and $V$ columns. Fill every single cell with 0 initially.Read the Address Book: Iterate through the adjList using a for loop. The current index i is our "From" node.Mark the Spreadsheet: For each node i, loop through its array of neighbors. Let's call a neighbor j (the "To" node). Go to row i, column j in your matrix, and flip that 0 to a 1.Here is an interactive visualizer. Click step-by-step to watch exactly how the list maps to the matrix coordinates!

function listToMatrix(adjList) {
    // 1. Get the total number of vertices (V)
    const V = adjList.length;

    // 2. Build the V x V matrix filled with 0s
    // Array.from is the safest way to create 2D arrays in JavaScript
    // without running into memory reference bugs.
    const adjMatrix = Array.from({ length: V }, () => Array(V).fill(0));

    // 3. Iterate through every node in the adjacency list
    for (let u = 0; u < V; u++) {

        // 4. Look at all the neighbors this node 'u' points to
        const neighbors = adjList[u];

        for (let i = 0; i < neighbors.length; i++) {
            const v = neighbors[i];

            // 5. Flip the cell at (Row u, Col v) to 1
            adjMatrix[u][v] = 1;
        }
    }

    return adjMatrix;
}

// Complexity Analysis
// Time Complexity: O(V
// 2
//  )
// Even though iterating through the edges only takes O(E) time, the very act of creating and filling a V×V matrix takes O(V
// 2
//  ) time. In Big O, O(V
// 2
//  +E) simplifies to O(V
// 2
//  ) because the matrix creation dominates the time.

// Space Complexity: O(V
// 2
//  )
// We are explicitly building and returning a 2D array of size V×V. For a graph with 316 nodes (the maximum in your constraints), this creates an array of about 100,000 elements, which uses a negligible amount of memory (less than a megabyte) and is perfectly safe.