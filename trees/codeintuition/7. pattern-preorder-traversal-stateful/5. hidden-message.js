// Rule 1: The SECOND character of every node is part of the hidden message.
// So from the tree:

// bn → message character is n
// i_ → message character is _
// ae → message character is e
// etc.

// The final message is nice_try!

// Rule 2: The FIRST character tells you WHEN to read that node's message character:

// 'b' → read ME first, then left subtree, then right subtree
// 'i' → read left subtree first, then ME, then right subtree
// 'a' → read left subtree first, then right subtree, then ME

// Sound familiar? 😄

// 'b' = before  = PREORDER  (root, left, right)
// 'i' = inorder = INORDER   (left, root, right)
// 'a' = after   = POSTORDER (left, right, root)

// Question -
// [images/5. hidden-message_2026-04-23-14-40-26.png]
// [images/5. hidden-message_2026-04-23-14-40-35.png]

// Approach - the first character isn't passed FROM parent TO child. Each node already HAS its own first character in its text field! The node reads its OWN first character and decides its own traversal.
// So actually:

// Info flow → Global state (shared result string)
// Each node reads its OWN node.text[0] to decide traversal
// Each node contributes node.text[1] to the global result

// So the pattern is:

// function visit(node):
//   if !node → return

//   firstChar = node.text[0]
//   msgChar   = node.text[1]

//   if firstChar === 'b':        // preorder
//     add msgChar to result
//     visit(node.left)
//     visit(node.right)

//   else if firstChar === 'i':   // inorder
//     visit(node.left)
//     add msgChar to result
//     visit(node.right)

//   else if firstChar === 'a':   // postorder
//     visit(node.left)
//     visit(node.right)
//     add msgChar to result

function solve(root) {
  let result = "";

  function visit(node) {
    if (!node) return;

    let firstChar = node.val[0];
    let msgChar = node.val[1];

    if (firstChar === "b") {
      // preorder
      result += msgChar;
      visit(node.left);
      visit(node.right);
    } else if (firstChar === "i") {
      // inorder
      visit(node.left);
      result += msgChar;
      visit(node.right);
    } else {
      // postorder
      visit(node.left);
      visit(node.right);
      result += msgChar;
    }
  }

  visit(root);

  return result;
}

// ⏱️ COMPLEXITY

// Time: O(n) — visit every node once
// Space: O(h) — recursion stack

// 🔑 KEY INSIGHT

// "Each node decides its OWN traversal order based on its first character. One global string collects the result. That's it!"

// This is a beautiful example of Stateful Preorder/Inorder/Postorder mixed — the pattern recognition question here is:

// "Each node contributes to a shared result → global variable!"

// 🎯 PATTERN CHECK

// Q1: Info flow?     → Global state (shared result string)
// Q2: Global needed? → YES (result variable)
// Q3: Each node?     → Read own first char → decide traversal order