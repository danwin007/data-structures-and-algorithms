'use strict';

/* Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue
Calling dequeue or peek on empty queue raises exception
*/

const Queue = require('../queue.js');

describe('queue operations', () => {
  it('can successfully enqueue into a queue', () => {
      let myQueue = new Queue();
      myQueue.enqueue('red');

      expect(myQueue.isEmpty2()).toBe(false);
      expect(myQueue.peek()).toBe('red');
  });

  it('can successfully enqueue multiple values into a queue', () => {
      let myQueue = new Queue();
      myQueue.enqueue('red');
      myQueue.enqueue('orange');
      myQueue.enqueue('green');
      myQueue.enqueue('blue');

      expect(myQueue.isEmpty1()).toBe();
      expect(myQueue.peek()).toBe('red');
  });

  it('can successfully dequeue out of a queue the expected value', () => {
      let myQueue = new Queue();
      myQueue.enqueue('red');
      myQueue.enqueue('orange');

      expect(myQueue.isEmpty2()).toBe(false);
      expect(myQueue.peek()).toBe('red');

      let cutNode = myQueue.dequeue();

      expect(cutNode.val).toBe('red');
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
      let myQueue = new Queue();
      myQueue.enqueue('red');
      myQueue.enqueue('orange');
      myQueue.enqueue('green');
      myQueue.enqueue('blue');

      expect(myQueue.isEmpty2()).toBe(false);
      expect(myQueue.peek()).toBe('red');
  });

  it('successfully empty a queue after multiple dequeues', () => {
      let myQueue = new Queue();
      myQueue.enqueue('red');
      myQueue.enqueue('orange');
      myQueue.enqueue('green');
      myQueue.enqueue('blue');

      myQueue.dequeue()
      myQueue.dequeue()
      myQueue.dequeue()
      myQueue.dequeue()

      expect(myQueue.isEmpty1()).toBe();
  });

  it('can successfully instantiate an empty queue', () => {
      let myQueue = new Queue();

      expect(myQueue.isEmpty2()).toBe(true);
      // expect(myStack.top).toBe();
  });

  it('calling dequeue or peek on empty queue raises exception', () => {
      let myQueue = new Queue();

      expect(myQueue.isEmpty1()).toBe(true);

      expect(() => {
          myQueue.peek();
      }).toThrow();
      expect(() => {
          myQueue.pop();
      }).toThrow();
  });
});