'use strict';

const TreeNode = require('./binaryTree.js').TreeNode;
const BinaryTree = require('./binaryTree.js').BinaryTree;

describe('happy path', () => {
    it('prints out a good sized tree', () => {
        let tree = new BinaryTree();

        /*
                A
            B       C
          D   E   F
        */

        tree.root = new TreeNode('A');
        tree.root.left = new TreeNode('B');
        tree.root.right = new TreeNode('C');
        tree.root.left.left = new TreeNode('D');
        tree.root.left.right = new TreeNode('E');
        tree.root.right.left = new TreeNode('F');

        expect(tree.breadthFirst()).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    });

    it('prints out a small sized tree', () => {
      let tree = new BinaryTree();

      /*
              A
          B       C
      */

      tree.root = new TreeNode('A');
      tree.root.left = new TreeNode('B');
      tree.root.right = new TreeNode('C');

      expect(tree.breadthFirst()).toEqual(['A', 'B', 'C']);
  });
  it('can handle empty tree', () => {
    let tree = new BinaryTree();

    expect(tree.breadthFirst()).toEqual([]);
});
});