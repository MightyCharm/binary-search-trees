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

const node = Node(5);
console.log(node);
