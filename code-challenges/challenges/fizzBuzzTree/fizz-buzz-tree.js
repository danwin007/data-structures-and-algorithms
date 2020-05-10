'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const fizzBuzzTree = (root) => {
  let str = '';

  if (root.val % 3 === 0) str += 'Fizz';
  if (root.val % 5 === 0) str += 'Buzz';

  let newRoot = new Node(str ? str : `${root.val}`);

  if (root.left) newRoot.left = fizzBuzzTree(root.left);
  if (root.right) newRoot.right = fizzBuzzTree(root.right);

  return newRoot;
}