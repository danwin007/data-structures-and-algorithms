'use strict';

class Animal {
  constructor(type) {
    this.type = type.toLowerCase();
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    //ensure animal is either dog or cat
    if( animal.toLowerCase() !== 'cat' && animal.toLowerCase() !== 'dog'){
      throw Error;
    }
    
    //adds animal to shelter
    let newNode = new Animal(animal);

    //make sure this queue isnt empty. if it is, make this node the first and last
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
    return;
  }

  dequeue(pref) {
    //removes animal of certain type from the queue
    //type is pref
    //check that pref is dog or cat
    if(pref.toLowerCase() !== 'cat' && pref.toLowerCase() !== 'dog') {
      throw Error;
    }

    //make sure queue has stuff in it
    if (this.isEmpty()) {
      throw Error;
      return;
    }

    let prev = null;
    let current = this.front;

    while(current) {
      if (current.type === pref.toLowerCase()) {
        //to dequeue the node
        prev.next = current.next;
        current.next = null;
        return current;
      }

      //to iterate through
      prev = current;
      current = current.next;
    }
  }
  
  isEmpty() {
    //to check of queue is empty
    return !this.front && !this.rear;
  }
}

module.exports = AnimalShelter;