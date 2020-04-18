const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let nodeToQueue = new Node(val);

    if (this.isEmpty()){
      this.front = nodeToQueue;
      this.rear = nodeToQueue;
      return;
    }

    this.rear.next = nodeToQueue;
    this.rear = nodeToQueue;
  }

  dequeue() {
    let nodeToDequeue = this.front;

    if (this.isEmpty()){
      throw 'NullReferenceException';
      return;
    }

    this.front = this.front.next;
    nodeToDequeue.next = null;

    return nodeToDequeue;
  }

  peek() {
    if (this.isEmpty()){
      throw 'NullReferenceException';
      return;
    }

    return this.front.val;
  }

  isEmpty() {
    return !this.front && !this.rear;
  }
}