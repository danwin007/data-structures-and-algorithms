'use strict';

/*
        INSTRUCTIONS

____** Create two classes: Node and LinkedList **____
[x]both exported by this file
/////////////

____** Node Class: **____
[x]Node should have these properties: val, next, prev
// no functions or methods needed
/////////////

____** LinkedList Class: **____
[x]LinkedList should have these properties: head
// functions | methods: [x]insert(), [x]includes(), [x]toString()
/////////////

____** Tests: need to write 7 tests **____
- Your LinkedList can successfully instantiate an empty list
- You can properly insert a value into the list
- Your LinkedList head property will correctly point to the beginning of the list
- You can insert multiple Nodes into the list successfully
- Your includes() function correctly finds a value in the list that exists
- Your includes() function correctly returns false when a value is not in the list
- Your toString() function prints out your LinkedList in an expected way
/////////////

____** Github Actions setup: **____

____** Read Me setup: **____

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.prev = null;
    //stretch goal item ^^
  }
}

class LinkedList {
  constructor() {
    //default is empty
    this.head = null;
  }

///use try catch blocks for err handle

  insert(val){
    try{
      //only inserts at beginning
      let newNode = new Node(val);

      newNode.next = this.head;
      this.head = newNode;
    } catch(e){
      throw err;
    }
  }

  includes(val){
    try {
      //need to look at each item from head to tail
      //for loop?
      //found at https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
      let count = 0;
      let currVal = this.head;

      //iterate over list
      //if found, give count of item
      while (currVal != null){
        if (currVal.val === val)
          return console.log('item found at', count, val);
        count++;
        currVal = currVal.next;
      }
      //if not found
      console.log('false, item not found', val);
    } catch(e){
      throw err;
    }
  }

  toString(){
    try {
      let currNode = this.head;
      let str = '';
  
      while(currNode != null) {
        str += `[ ${currNode.val}] ->`;
        currNode = currNode.next;
      }
  
      str += 'null';
      console.log(str);
    } catch(e){
      throw err;
    }
  }
}

let myList = new LinkedList();

myList.toString();
myList.insert('A');
myList.toString();

myList.insert('B');
myList.toString();

myList.insert('C');
myList.toString();

myList.insert('D');
myList.toString();

myList.includes('A');
myList.includes('E');

module.exports = { Node, LinkedList};