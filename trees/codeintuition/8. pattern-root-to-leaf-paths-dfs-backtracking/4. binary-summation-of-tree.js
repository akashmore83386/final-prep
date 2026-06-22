function binarySummationOfTree(root) {
  if (!root) return 0;

  let sum = 0;

  function dfs(node, value) {
    if (!node) return;

    // we get the value as the empty string and then we add the current node's value in that string.
    value = value + String(node.val);

    // we then check if the node is leaf node or not, for the leaf node, we convert our value to decimal from binary and add that into the sum
    if (!node.left && !node.right) {
      sum = sum + parseInt(value, 2);
      return;
    }

    dfs(node.left, value);
    dfs(node.right, value);
  }

  dfs(root, "");

  return sum;
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack + string length = O(h)

// 🔑 KEY INSIGHT

// "parseInt(value, 2) converts any binary string to decimal in one shot. Memorize this — it appears in multiple tree and bit manipulation problems!"

