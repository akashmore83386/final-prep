const { PriorityQueue } = require("@datastructures-js/priority-queue")

function kMostPlayed(songs, k) {
    // If we have k or fewer songs, there's nothing to filter out.
    if (songs.length < k) return songs.map((song) => song[0])

    // Min-heap ordered by play count. We keep it capped at size k, so the
    // "weakest" (lowest play count) song always sits at the top — ready to
    // be evicted the instant a more-played song shows up.
    const minHeap = new PriorityQueue((a, b) => a[1] - b[1])

    for (let i = 0; i < songs.length; i++) {
        const [song, play] = songs[i]
        minHeap.enqueue([song, play])

        // Heap grew past k → evict the least-played song currently in it.
        // This is what pins our space usage at O(k) — the heap never
        // holds more than k songs at any point in time.
        if (minHeap.size() > k) {
            minHeap.dequeue()
        }
    }

    console.log(minHeap.front())

    // Whatever survives in the heap after processing every song IS the
    // answer. Order doesn't matter per the problem, so we just drain it.
    const result = []
    while (!minHeap.isEmpty()) {
        result.push(minHeap.dequeue()[0])
    }

    return result
}

console.log(kMostPlayed([["All the Single Brackets", 132],
["Oops! I Broke Prod Again", 274],
["Coding In The Deep", 146],
["Boolean Rhapsody", 193],
["Here Comes The Bug", 291],
["All About That Base Case", 291]], 3))

// TC - O(n log k)
// SC - O(k)