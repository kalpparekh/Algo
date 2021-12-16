/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode();
tree.insert([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, null]);

// ------- Code to generate our binary tree -------

// ------- Our Solution -------

const countNodes = function (root) {
  if (!root) {
    return null;
  }

  const height = getHeight(root);
  let upperCount = Math.pow(2, height) - 1;

  let left = 0;
  let right = upperCount;

  while (left < right) {
    let idxToFind = Math.ceil((left + right) / 2);

    if (nodeExists(height, idxToFind, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  return upperCount + left + 1;
};

const nodeExists = function (height, idxToFind, node) {
  let counter = 0;
  let left = 0;
  let right = Math.pow(2, height) - 1;

  while (counter < height) {
    let mid = Math.ceil((left + right) / 2);

    if (idxToFind >= mid) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }

    counter++;
  }

  if (node) {
    return true;
  } else {
    return false;
  }
};

const getHeight = function (root) {
  let height = 0;
  while (root.left) {
    height++;
    root = root.left;
  }
  return height;
};

console.log(countNodes(tree));
