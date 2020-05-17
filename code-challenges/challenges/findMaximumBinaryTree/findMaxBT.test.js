'use strict';

// - returns the max value (happy path)
// - handles empty tree
// - handles tree with duplicate values
// - handles tree with one node
// - handles tree with negative numbers??

'use strict';

const BinaryTree = require('./findMaxBT.js').BinaryTree;
const Node = require('./findMaxBT.js').Node;

describe('happy path', () => {
    it('returns the max value', () => {
        let tree = new BinaryTree();

        tree.root = new Node(2);
        tree.root.right = new Node(7);
        tree.root.left = new Node (1);
        tree.root.right.right = new Node(9);
        tree.root.right.left = new Node(3);
        tree.root.left.right = new Node(6);
        tree.root.left.left = new Node(4);

        expect(tree.findMaximumValue()).toEqual(9);
    });

    it('handles empty tree', () => {
      let tree = new BinaryTree();

      expect(tree.findMaximumValue()).toEqual(this.root);
  });
  it('handles tree with dupe val', () => {
    let tree = new BinaryTree();

    tree.root = new Node(2);
    tree.root.right = new Node(7);
    tree.root.left = new Node (1);
    tree.root.right.right = new Node(4);
    tree.root.right.left = new Node(3);
    tree.root.left.right = new Node(6);
    tree.root.left.left = new Node(4);

    expect(tree.findMaximumValue()).toEqual(7);
  });

  it('handles tree with single node', () => {
    let tree = new BinaryTree();

    tree.root = new Node(2);

    expect(tree.findMaximumValue()).toEqual(2);
  });

  it('handles tree with negative values', () => {
    let tree = new BinaryTree();

    tree.root = new Node(2);
    tree.root.right = new Node(-7);
    tree.root.left = new Node (1);
    tree.root.right.right = new Node(4);
    tree.root.right.left = new Node(3);
    tree.root.left.right = new Node(6);
    tree.root.left.left = new Node(4);

    expect(tree.findMaximumValue()).toEqual(6);
  });
});