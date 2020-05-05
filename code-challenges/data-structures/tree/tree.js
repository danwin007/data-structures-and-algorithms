'use strict';


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root){
    try{
      if(root != null)
      {
        let arr = [];
        arr.push(root.val);

        if(root.left) arr =[...arr,...this.preOrder(root.left)];
        if(root.right) arr = [...arr,...this.preOrder(root.right)];
        console.log('preorder', arr);
        return arr;
      }
    } catch(e){
      throw err; 
    }
  }

  inOrder(root) {
    try{
      if(root != null)
      {
        let arr = [];
        
        if(root.left) arr = [...arr,...this.inOrder(root.left)];
        arr.push(root.val);
        if (root.right) arr = [...arr,...this.inOrder(root.right)];
        console.log('inorder', arr);
        return arr;
      }
    } catch(e){
      throw err;
    }
  }

  postOrder(root) {
    try{
      if(root != null)
      {
        let arr = [];

        if(root.left) arr = [...arr,...this.postOrder(root.left)];
        if(root.right) arr = [...arr,...this.postOrder(root.right)];
        arr.push(root.val);
        console.log('postOrder', arr);
        return arr;
      }
    } catch(e){
      throw err;
    }
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    // this.root = null;
  }

  add(val){
    // found at https://www.youtube.com/watch?v=5cU1ILGy6dM
    try{
      let node = this.root;
      if (node === null) {
        this.root = new Node(val);
        return;
      } else {
        const searchTree = function(node) {
          if (val < node.val) {
            if (node.left === null) {
              node.left = new Node(val);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (val > node.val) {
            if (node.right === null) {
              node.right = new Node(val);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    } catch(e){
      throw err;
    }
  }

  contains(root, val){
    try{
      //return true or false if val is in the tree
      if(root == null) return false;
      if(root.val == val) return true;

      else if(root.val < val) return this.contains(root.right, val);
      else return this.contains(root.left, val);
      
    } catch(e){
      throw err;
    }
  }
}

let myTree = new BinarySearchTree();
myTree.add(3);
myTree.add(1);
myTree.add(2);
myTree.preOrder(myTree.root);
myTree.inOrder(myTree.root);
myTree.postOrder(myTree.root);
// console.log(myTree.contains(myTree.root, 2));
// console.log(myTree.contains(myTree.root, 4));





module.exports = { Node, BinaryTree, BinarySearchTree};