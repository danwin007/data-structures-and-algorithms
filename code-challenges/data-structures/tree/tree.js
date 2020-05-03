'use strict';


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(val) {
    this.root = null;
  }

  preOrder(root){
    try{
      print(root.val);
      if(root.left) this.preOrder(root.left);
      if(root.right) this.preOrder(root.right);
      return;
    } catch(e){
      throw err, 'preOrder error'; 
    }
  }

  inOrder(root) {
    try{
      if(root.left) this.inOrder(root.left);
      print(root.val);
      if (root.right) this.inOrder(root.right);
      return;
    } catch(e){
      throw err, 'inOrder error';
    }
  }

  postOrder(root){
    try{
      if(root.left) this.postOrder(root.left);
      if(root.right) this.postOrder(root.right);
      print(root.val);
      return;
    } catch(e){
      throw err, 'postOrder error';
    }
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(val) {
    super(val);
    this.root = null;
  }

  add(val){
    try{
      
    } catch(e){
      throw err, 'add error';
    }
  }

  contains(val){
    try{
      
    } catch(e){
      throw err, 'contains error';
    }
  }
}




module.exports = { Node, BinaryTree, BinarySearchTree};