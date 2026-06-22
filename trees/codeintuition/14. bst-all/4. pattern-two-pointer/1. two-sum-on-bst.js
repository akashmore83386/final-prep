// Given the root of a binary search tree and an integer value target, write a function that returns true if a pair of nodes in this tree exists that sum up to the target. Return false if no such pair exists.

// k = 9

//         4
//     2       6       -> true pair 2 and 7 exists which add sum as target/k
// 1               7

// explain iterators super simply! 😄
// You know how inorder traversal visits ALL nodes at once recursively? An iterator is just a way to get nodes one at a time on demand:
// Normal inorder:     visits 1,2,3,4,5,6,7 all at once
// Forward Iterator:   .next() → 1
//                     .next() → 2
//                     .next() → 3  (stops here until you ask again!)
// Think of it like Netflix vs a movie theatre — Netflix lets you pause anytime, theatre plays the whole thing. Iterator = Netflix! 😄

// So the two-pointer on BST works like:
// left.next()  → gives next smallest
// right.next() → gives next largest

// while leftNode.val < rightNode.val:
//     if sum === target → return true
//     if sum < target  → move left pointer
//     if sum > target  → move right pointer

// First let's implement the ForwardIterator (smallest → largest). It uses a stack to pause and resume inorder traversal on demand.
class ForwardIterator {
  constructor(root) {
    this.stack = [];
    this.pushLeft(root); // push all left nodes first
  }

  pushLeft(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next() {
    let node = this.stack.pop();
    this.pushLeft(node.right); // explore right subtree
    return node;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

class ReverseIterator {
  constructor(root) {
    this.stack = [];
    this.pushRight(root); // push all left nodes first
  }

  pushRight(node) {
    while (node) {
      this.stack.push(node);
      node = node.right;
    }
  }

  next() {
    let node = this.stack.pop();
    this.pushRight(node.left); // explore right subtree
    return node;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

// main function

function solve(root, target) {
  let left = new ForwardIterator(root); // smallest → largest
  let right = new ReverseIterator(root); // largest → smallest

  let leftNode = left.next();
  let rightNode = right.next();

  while (leftNode.val < rightNode.val) {
    let sum = leftNode.val + rightNode.val;

    if (sum === target) return true;
    if (sum < target) leftNode = left.next(); // move which pointer?
    if (sum > target) rightNode = right.next(); // move which pointer?
  }

  return false;
}

// Solution using the hashset -

var findTarget = function (root, k) {
  const seen = new Set();

  function dfs(node) {
    if (!node) return false;

    // Check if the complement exists in the set
    if (seen.has(k - node.val)) return true;

    // Add current value to the set
    seen.add(node.val);

    // Traverse left and right subtrees
    return dfs(node.left) || dfs(node.right);
  }

  return dfs(root);
};

// HashSet solution:

// ✅ Simple to write
// ✅ O(N) time
// ❌ O(N) space — stores all values in a Set
// ❌ Doesn't use BST property AT ALL — works on any binary tree!

// Two Pointer solution:

// ✅ O(N) time
// ✅ O(H) space — only stores tree height in stacks (O(log N) for balanced!)
// ✅ Uses BST property intelligently
// ❌ More complex to implement

// So why learn two pointer? Three reasons:
// 1. Space efficiency matters at scale 🔴
// If the BST has 1 billion nodes, HashSet stores 1 billion values in memory. Two pointer only stores the height of the tree!
// 2. FAANG interviews test pattern knowledge 🔴
// Any interviewer can see the HashSet solution — it's trivial. The two pointer solution shows you deeply understand BST properties. That's what separates candidates!
// 3. The pattern extends further 🔴
// HashSet won't help you in the next problems like Median in BST or BST Pair Sum — but two pointer will! 💡

// Think of it like this champ:

// HashSet = brute forcing with extra memory
// Two Pointer = using the data structure's properties intelligently

// Always know BOTH solutions in an interview — mention HashSet first, then say "but we can optimize space using two pointers!" 😄
// Ready for the next problem? 💪