//         5
//        / \
//       2   2

//       Subtree sums:

// Node 2 (left) → sum = 2
// Node 2 (right) → sum = 2
// Node 5 → sum = 5 + 2 + 2 = 9

// So we have sums: [2, 2, 9]
// Sum 2 appears 2 times
// Sum 9 appears 1 time
// Most frequent = 2 → return [2]

// Now back to our original tree:

//         5
//        / \
//       2   -3

//     Sums: [2, -3, 4]
// Each sum appears exactly 1 time — it's a tie!
// So return ALL of them → [2, -3, 4] ✅

// Simply:

// "Calculate subtree sum for every node. Find which sum(s) appear most frequently. Return those sums!"

function solve(root) {
  if (!root) return [];

  // we'll use the HashMap to track the frequency
  const frequencyMap = new Map(); // 2: 1, -3: 1, 4: 1

  function dfs(node) {
    if (!node) return 0;

    // on the current node we need to have the access for the left and right side sum
    let leftGain = dfs(node.left);
    let rightGain = dfs(node.right);

    // get the total gain on the current node including the current node's value
    let totalGain = node.val + leftGain + rightGain;

    // update frequency map
    frequencyMap.set(totalGain, (frequencyMap.get(totalGain) || 0) + 1);

    // we are passing the total gain to parent
    return totalGain;
  }

  dfs(root);

  let maxCount = Math.max(...frequencyMap.values());  // 1

  return Array.from(frequencyMap.entries()) // 2: 1, -3: 1, 4: 1
    .filter(([_, count]) => count === maxCount) // 1, 1, 1
    .map(([sum]) => sum); // [2, -3, 4]
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(n) — HashMap stores one entry per unique sum

// 🔑 KEY INSIGHT

// "Stateful postorder = return subtree sum UP + update global HashMap. Then post-process the HashMap to get the answer!"