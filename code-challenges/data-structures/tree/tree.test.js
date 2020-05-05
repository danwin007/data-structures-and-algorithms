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
      
    expect(false).toBe(true);
  });

  it('5. You can successfully do an inOrder traversal', () => {
      
    expect(false).toBe(true);
  });

  it('6. You can successfully do a postOrder traversal', () => {
      
    expect(false).toBe(true);
  });

  it('7. You can successfully add a value to a binary search tree', () => {
      
    expect(false).toBe(true);
  });

  it('8. You can search a binary search tree for a value and get the correct true/false result', () => {
      
    expect(false).toBe(true);
  });


});
