// Given the root of a binary tree and two values valA and valB, write a function that returns true if the two nodes with the given values are cousins in this tree.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

function solve(root, x, y) {
  if (!root) return false;

  const queue = [[root, null]]; // [node, parent]

  while (queue.length) {
    const levelSize = queue.length;

    let foundX = false;
    let foundY = false;

    let parentX = null;
    let parentY = null;

    for (let i = 0; i < levelSize; i++) {
      const [node, parent] = queue.shift();

      if (node.val === x) {
        foundX = true;
        parentX = parent;
      }

      if (node.val === y) {
        foundY = true;
        parentY = parent;
      }

      if (node.left) queue.push([node.left, node]);
      if (node.right) queue.push([node.right, node]);
    }

    // if both found on same level
    if (foundX && foundY) {
      return parentX !== parentY; // if parents are different then they are cousins.
    }

    // if one is found but on the different depth
    if (foundX || foundY) {
      return false;
    }
  }

  return false;
}

// BFS level by level. At each level track if we found x and y and their parents. End of level — both found? Check parents. Only one found? Return false. Neither? Next level.