'use strict';

// Write tests to prove the following functionality:

// You can successfully instantiate an empty tree
// You can successfully instantiate a tree and add a single root node
// You can successfully add a left and right child to a single root node
// You can successfully do a preOrder traversal
// You can successfully do an inOrder traversal
// You can successfully do a postOrder traversal
// You can successfully add a value to a binary search tree
// You can search a binary search tree for a value and get the correct true/false result

const classes = require('./tree.js');
const Node = classes.Node;
const BinaryTree = classes.BinaryTree;
const BinarySearchTree = classes.BinarySearchTree;

describe('Happy Path', () => {

  it('1. You can successfully instantiate an empty tree', () => {
      let myTree = new BinarySearchTree();

        expect(myTree).toBeTruthy();
  });

  it('2. You can successfully instantiate a tree and add a single root node', () => {
    let myTree = new BinarySearchTree();
    myTree.add(1);

      expect(myTree.contains(myTree.root, 1)).toBe(true);
  });

  it('3. You can successfully add a left and right child to a single root node', () => {
    let myTree = new BinarySearchTree();
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);

        expect(myTree.root.val).toBe(2);
        expect(myTree.root.right.val).toBe(3);
        expect(myTree.root.left.val).toBe(1);
  });

  it('4. You can successfully do a preOrder traversal', () => {
    let myTree = new BinarySearchTree();
    myTree.add(3);
    myTree.add(1);
    myTree.add(2);

    expect(myTree.preOrder(myTree.root)).toStrictEqual([3, 1, 2]);
  });

  it('5. You can successfully do an inOrder traversal', () => {
    let myTree = new BinarySearchTree();
    myTree.add(3);
    myTree.add(1);
    myTree.add(2);

    expect(myTree.inOrder(myTree.root)).toStrictEqual([1, 2, 3]);
  });

  it('6. You can successfully do a postOrder traversal', () => {
    let myTree = new BinarySearchTree();
    myTree.add(3);
    myTree.add(1);
    myTree.add(2);

    expect(myTree.postOrder(myTree.root)).toStrictEqual([2, 1, 3]);
  });

  it('7. You can successfully add a value to a binary search tree', () => {
    let myTree = new BinarySearchTree();
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
    myTree.add(9);

    expect(myTree.root.right.right.val).toBe(9);
  });

  it('8. You can search a binary search tree for a value and get the correct true/false result', () => {
    let myTree = new BinarySearchTree();
    myTree.add(2);
    myTree.add(1);
    myTree.add(3);
      
    expect(myTree.contains(myTree.root, 3)).toBe(true);
    expect(myTree.contains(myTree.root, 4)).toBe(false);

  });


});

