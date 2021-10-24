class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
        return true;
      }
    }
    return false;
  }

  remove(value) {}

  findingClosest(target) {
    let currentNode = this.root;
    let closest = this.root.value;

    while (currentNode !== null) {
      if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
        closest = currentNode.value;
      }

      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return closest;
  }
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(6);
BST.insert(20);
BST.insert(11);
BST.insert(10);
BST.insert(8);
BST.insert(88);
BST.insert(12);

const tree = BST.root;
function validateBST(tree, minValue = -Infinity, maxValue = Infinity) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const isLeftValid = validateBST(tree.left, minValue, tree.value);
  return isLeftValid && validateBST(tree.right, tree.value, maxValue);
}

const isValid = validateBST(tree);
// console.log(isValid);

function inOrderTraversal(tree, inOrderArray) {
  if (tree !== null) {
    inOrderTraversal(tree.left, inOrderArray);
    inOrderArray.push(tree.value);
    inOrderTraversal(tree.right, inOrderArray);
  }
  return inOrderArray;
}

const inOrderTraversed = inOrderTraversal(tree, []);
// console.log(inOrderTraversed);

function preOrderTraversal(tree, preOrderArray) {
  if (tree !== null) {
    preOrderArray.push(tree.value);
    preOrderTraversal(tree.left, preOrderArray);
    preOrderTraversal(tree.right, preOrderArray);
  }
  return preOrderArray;
}

const preOrderTraversed = preOrderTraversal(tree, []);
// console.log(preOrderTraversed);

function postOrderTraversal(tree, array) {
  if (tree !== null) {
    postOrderTraversal(tree.left, array);
    postOrderTraversal(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

// console.log(postOrderTraversal(tree, []))

function minHeightBST() {}

function kthLargetInBST(tree) {
  const array = inOrderTraversal(tree, []);
  const k = 3;

  return array[array.length - k];
}

console.log(kthLargetInBST(tree));
