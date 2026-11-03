// returns an array of random length containing random numbers
function createArray() {
  const min_length = 15;
  const max_length = 20;
  const length =
    Math.floor(Math.random() * (max_length - min_length + 1)) + min_length;

  const min_value = 0;
  const max_value = 99;
  const array = [];
  while (array.length < length) {
    const randomNumber =
      Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    array.push(randomNumber);
  }
  return array;
}

// function is given from odin project and outputs the tree structure
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
}

// factory function returns a node object
function Node(value) {
  return {
    data: value,
    left: null,
    right: null,
  };
}

// factory function manages the binary search tree
function Tree(array) {
  let root = buildTree(array);

  // prepares the array and calls the recursive function, which creates the tree and returns the root node
  function buildTree(array) {
    const cleanedArray = prepareArray(array);
    const start = 0;
    const end = cleanedArray.length - 1;

    return createTree(cleanedArray, start, end);
  }

  // recursive function that creates the tree
  function createTree(array, start, end) {
    if (start > end) return;
    const mid = Math.floor((start + end) / 2);
    const node = Node(array[mid]);

    node.left = createTree(array, start, mid - 1);
    node.right = createTree(array, mid + 1, end);
    return node;
  }

  // removes duplicates and returns a sorted array
  function prepareArray(array) {
    const cleanedArray = [];
    array.forEach((num) => {
      if (!cleanedArray.includes(num)) {
        cleanedArray.push(num);
      }
    });
    return cleanedArray.sort((a, b) => a - b);
  }

  // calls a recursive function that searches for a given value and returns true or false
  function includes(value) {
    const is_included = searchValue(root, value);
    return is_included;
  }

  // recursive function searches after a target inside the tree
  function searchValue(node, target) {
    if (!node) {
      return false;
    }
    const value = node.data;
    if (target < value) {
      return searchValue(node.left, target);
    }
    if (target > value) {
      return searchValue(node.right, target);
    }
    return true;
  }

  // calls a recursive function that will insert a given value into the tree
  function insert(value) {
    insertNode(root, value);
  }

  // recursive function which inserts a given value into the tree
  function insertNode(node, value) {
    if (value < node.data) {
      if (!node.left) {
        node.left = Node(value);
        return;
      }
      insertNode(node.left, value);
    } else if (value > node.data) {
      if (!node.right) {
        node.right = Node(value);
        return;
      }
      insertNode(node.right, value);
    } else {
      return;
    }
  }

  return { root, includes, insert };
}

let array = createArray();
const tree = Tree(array);
tree.insert(10);
tree.insert(55);
tree.insert(3);
prettyPrint(tree.root);
