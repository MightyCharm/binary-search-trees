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

  // removes duplicates, sorts the array and calls recursive function for tree creation and returns root node
  function buildTree(array) {
    const cleanedArray = [];
    array.forEach((number) => {
      if (!cleanedArray.includes(number)) {
        cleanedArray.push(number);
      }
    });
    cleanedArray.sort((a, b) => a - b);
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

  return { root };
}

let array = createArray();
const myTree = Tree(array);
console.log(myTree);
