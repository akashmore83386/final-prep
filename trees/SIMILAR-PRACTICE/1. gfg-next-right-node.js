/**
 * @param {Node} root
 * @param {number} key
 * @returns {Node}
 */

class Solution {
  // Function to find the next right of given key node.
  nextRight(root, key) {
    // your code here
    let queue = [root];

    while (queue.length) {
      let levelSize = queue.length;
      let levelNodes = [];

      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();

        levelNodes.push(current);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }

      for (let i = 0; i < levelNodes.length; i++) {
        if (levelNodes[i].data === key) {
          if (i + 1 < levelNodes.length) {
            return levelNodes[i + 1];
          } else {
            return new Node(-1);
          }
        }
      }
    }

    return new Node(-1);
  }
}

// Learning - The problem was asking to return the node, not the number! I was storing the number/value in the levelNodes for my tree nodes, and then was looping over the levelNodes (which had values/numbers) and was comparing with the provided key. SO ultimately I was just returning the value --> return levelNodes[i + 1]

// NOW I am just pushing the node itself in the levelNodes and then comparing its value with the key, and then returning the node next to it (right node). In case if there is no right node present to the given key node, then we are returing the -1 as node (because question asks us to return the ans in node only)