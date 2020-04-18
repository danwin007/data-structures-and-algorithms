const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    // add to front
    let nodeToQueue = new Node(val);

    if (this.isEmpty2()){
      this.front = nodeToQueue;
      this.rear = nodeToQueue;
      return;
    }

    this.rear.next = nodeToQueue;
    this.rear = nodeToQueue;
  }

  dequeue() {
    // remove from front
    let nodeToDequeue = this.front;

    if (this.isEmpty2()){
      throw 'NullReferenceException';
      return;
    }

    this.front = this.front.next;
    nodeToDequeue.next = null;

    return nodeToDequeue;
  }

  peek() {
    // look at top
    if (this.isEmpty2()){
      throw 'NullReferenceException';
      return;
    }

    return this.front.val;
  }

  isEmpty1() {
    if (!this.front && !this.rear)
    return true;
  }

  isEmpty2() {
    return !this.front && !this.rear;
  }

}

module.exports = Queue;