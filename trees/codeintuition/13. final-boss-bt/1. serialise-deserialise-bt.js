// Serialize   → convert tree to a STRING
// Deserialize → convert that STRING back to a tree

// Remember -

// Not all traversals can reconstruct the tree uniquely!
// Inorder alone  → can't reconstruct (multiple trees possible)
// Preorder alone → CAN reconstruct if you include NULL markers!
// Postorder      → CAN reconstruct if you include NULL markers!
// BFS            → CAN reconstruct if you include NULL markers!

// The key insight: You MUST include null markers in your serialization!
// Tree:        1
//             / \
//            2   3

// Preorder WITH nulls: "1,2,null,null,3,null,null"
// → Can perfectly reconstruct! ✅

// Preorder WITHOUT nulls: "1,2,3"
// → Could be multiple trees! ❌

// So the approach:
// Serialize:
// → Preorder DFS
// → For null nodes → write "null"
// → Join with ","

// Deserialize:
// → Split by ","
// → Preorder DFS
// → Use an index/pointer to track position
// → If "null" → return null
// → Otherwise → create node, recurse left then right

function serialise(root) {
  let result = [];

  function dfs(node) {
    if (!node) {
      result.push("null");
      return;
    }

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return result.join(",");
}

// Now the harder part — Deserialize.
// You have string: "1,2,null,null,3,null,null"
// Split it: ["1", "2", "null", "null", "3", "null", "null"]
// Think of it like reading this array LEFT TO RIGHT with a pointer:

// index 0 → "1"    → create node 1
// index 1 → "2"    → create node 2 (left of 1)
// index 2 → "null" → left of 2 is null
// index 3 → "null" → right of 2 is null
// index 4 → "3"    → create node 3 (right of 1)
// index 5 → "null" → left of 3 is null
// index 6 → "null" → right of 3 is null

// The KEY trick: Use an index that keeps moving forward as you consume values!

function deserialise(data) {
  // we need to get the data which is the string, and convert that into the array items in the nodes variable
  const nodes = data.split(",");

  // we are considering the index as the pointer which moves forward everytime
  let index = 0;

  function dfs() {
    // Why do we increment index for null
    //         Because "null" is still a VALUE in our array that we need to CONSUME and move past!
    // nodes = ["1", "2", "null", "null", "3", "null", "null"]
    //                     ↑
    //          We're here at index 2 → it's "null"
    //          We MUST move to index 3 next
    //          So index++ is necessary even for null!
    // Think of it like reading a book — even blank pages count as pages. You still turn the page! 📖

    if (nodes[index] === "null") {
      index++;
      return null;
    }

    // for every other node, we create a new node in the tree with converting the nodes item value into the integer
    const node = new TreeNode(parseInt(nodes[index]));

    // once we create the node we move forward
    index++;

    node.left = dfs(); // recurse left
    node.right = dfs(); // recurse right

    return node;
  }

  return dfs();
}

// Tree → serialize() → "1,2,null,null,3,null,null"
//                               ↓
// "1,2,null,null,3,null,null" → deserialize() → Tree