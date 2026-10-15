// The Mental Model: Taking College Classes
// Imagine you are registering for college classes.

// To take Calculus II, you must first pass Calculus I.

// To take Machine Learning, you must first pass Calculus II and Python 101.

// In graph terms, the number of prerequisites a class has is called its In-Degree (how many arrows are pointing in to it).

// Here is Kahn's Master Plan:

// Count Prerequisites: Go through every class and count how many prerequisites it has (calculate the in-degree for every node).

// Start with the Basics: Find all the classes with 0 prerequisites (in-degree of 0) and put them in your registration Queue. You can take these immediately!

// Graduate and Unlock: Take a class out of the Queue and add it to your official transcript (the result array). Since you just finished this class, go to all the advanced classes that required it and cross it off their prerequisite checklist (subtract 1 from their in-degree).

// Queue the newly unlocked: If any advanced class suddenly hits 0 prerequisites left, boom! It is unlocked. Throw it into the Queue.

// The Hidden Superpower
// Kahn's Algorithm has a built-in cycle detector. If there is a cycle (e.g., A requires B, and B requires A), their in-degrees will never reach 0. They will never get added to the Queue. At the end of the algorithm, if your transcript (result.length) doesn't have every single class in it, you instantly know there was a cycle!

// Why Interviewers Love This Algorithm:
// If an interviewer asks you, "Can you topologically sort this graph, but also tell me if a cycle exists?", Kahn's algorithm does both simultaneously without needing a messy nodesInPath tracking set!

// ------------------------------------------------------------------

// That is completely okay! Kahn's Algorithm is a massive shift in how you think about graphs.

// Instead of our usual DFS mindset ("Where can I explore next?"), Kahn's Algorithm uses a **"Who is ready right now?"** mindset.

// Let's completely forget about code for a second and just look at a tiny real-world example: **A College Degree**.

// Imagine this is your graph:

// * Class **A** (Math 101) $\rightarrow$ points to Class **C** (Advanced Math)
// * Class **B** (Physics 101) $\rightarrow$ points to Class **C** (Advanced Math)

// To take Class **C**, you *must* pass both **A** and **B** first.

// Here is exactly what Kahn's algorithm is doing, step-by-step:

// ### Step 1: The "Prerequisite Counter" (In-Degree)

// We walk up to every class and count how many arrows are pointing *in* to it. This tells us how many prerequisites it has.

// * **A:** 0 prerequisites (0 incoming arrows)
// * **B:** 0 prerequisites (0 incoming arrows)
// * **C:** 2 prerequisites (2 incoming arrows)

// ### Step 2: The Starting Line (The Queue)

// We ask: *"Which classes can I take on my very first day of college?"*
// You can only take classes with **0 prerequisites**.
// So, we put **A** and **B** into our Queue.

// ### Step 3: Taking Classes and Updating Checklists (The `while` loop)

// Now, we start pulling classes out of our Queue to "take" them.

// 1. **Take Class A:** * You finish A and put it on your final transcript (the `result` array).
// * Now, you go to every advanced class that requires A (which is Class **C**).
// * You tell Class C: *"Hey, I finished A!"* * Class C crosses A off its checklist. **C's prerequisite count drops from 2 to 1.** (This is `inDegree[neighbor]--` in the code).
// * Is C ready to take yet? No, it still has 1 prerequisite left (Class B).


// 2. **Take Class B:**
// * You finish B and put it on your transcript.
// * You go to Class C and say: *"Hey, I finished B!"*
// * Class C crosses B off its checklist. **C's prerequisite count drops from 1 to 0.**
// * Wait! C's count hit `0`! That means it is completely unlocked! (This is `if (inDegree[neighbor] === 0)` in the code).
// * Since C is unlocked, we throw it into the Queue so we can take it next!


// 3. **Take Class C:**
// * You finish C and put it on your transcript. No advanced classes depend on C, so we are done!
// * Final Transcript: `[A, B, C]`.



// ---

// ### Why does this detect cycles? (The Superpower)

// Imagine a broken college system:

// * **X** requires **Y**
// * **Y** requires **X**

// Let's do Step 1 (Count Prerequisites):

// * **X:** 1 prerequisite
// * **Y:** 1 prerequisite

// Let's do Step 2 (The Starting Line):

// * Which classes have 0 prerequisites? **None of them.**
// * Your Queue is completely empty from the very beginning!
// * The `while` loop never runs.
// * Your final transcript has `0` classes on it, but the college offers `2` classes. Because $0 \neq 2$, the code instantly knows you are trapped in a cycle!

// Does seeing it as "crossing prerequisites off a checklist until a class hits zero" make the logic click better for you?

/**
 * Kahn's Algorithm (BFS Topological Sort)
 * Uses "In-Degrees" (prerequisite counting) to resolve dependencies.
 */
function kahnTopologicalSort(graph) {
    const inDegree = {};

    // 1. Initialize all nodes in the graph with an in-degree of 0
    for (let node in graph) {
        inDegree[node] = 0;
    }

    // 2. Count the actual in-degrees (incoming arrows) for every node
    for (let node in graph) {
        for (let neighbor of graph[node] || []) {
            // If node points to neighbor, neighbor has 1 more prerequisite
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // 3. Find all nodes with 0 prerequisites and put them in our starting Queue
    const queue = [];
    for (let node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(Number(node));
        }
    }

    const result = []; // This will hold our final sorted transcript

    // 4. Process the Queue (The BFS Radar)
    while (queue.length > 0) {
        // Take the class that is ready
        const curr = queue.shift();
        result.push(curr); // Add it to our final transcript

        // Look at all the advanced classes that required the class we just finished
        for (let neighbor of graph[curr] || []) {
            // Cross this prerequisite off their checklist!
            inDegree[neighbor]--;

            // If their checklist hits 0, they are completely unlocked! Add to Queue.
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // 5. THE SUPERPOWER: Cycle Detection
    // If we didn't get to take every single class, it means some classes 
    // were trapped in an infinite prerequisite loop (a cycle).
    if (result.length !== Object.keys(graph).length) {
        console.log("Cycle detected! A valid topological sort is impossible.");
        return [];
    }

    return result; // Unlike DFS, Kahn's builds it in the exact right order. No .reverse() needed!
}

// Example: 
// 0 -> 1
// 0 -> 2
// 1 -> 3
// 2 -> 3
const graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: []
};

console.log("Kahn's Topological Order:", kahnTopologicalSort(graph));
// Output: [0, 1, 2, 3] or [0, 2, 1, 3]