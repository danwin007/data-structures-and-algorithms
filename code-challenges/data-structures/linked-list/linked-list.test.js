'use strict';

const classes = require('./linked-list.js');
const LinkedList = classes.LinkedList;

describe('Challenge 5: expected success tests', () => {
    it('successfully instantiates an empty list', () => {
        expect(() => {
           return new LinkedList();
        }).not.toThrow();

        let newList = new LinkedList();
        expect(newList.head).toBe(null);
    });

    it('can properly insert a value into the list', () => {
        let newList = new LinkedList();

        expect(() => {
            newList.insert('A');
        }).not.toThrow();

        // let str = newList.includes();
        // //above str is not ideal
        // //could be below, taken from demo codem
        let str = '[' + newList.head.val + '] -> ' + newList.head.next;

        expect(str).toBe('[A] -> null');
    });

    it('head property will correctly point to the beginning of the list', () => {
        let newList = new LinkedList();
        newList.insert('A');
        newList.insert('B');

        expect(newList.head).toBeDefined()
        expect(newList.head.val).toBe('B');
    });

    it('can insert multiple nodes into the list', () => {
        let newList = new LinkedList();

        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.insert('D');

        expect(newList.head).toBeDefined();
        expect(newList.head.val).toBe('D');
        expect(newList.head.next.val).toBe('C');
        expect(newList.head.next.next.val).toBe('B');
        expect(newList.head.next.next.next.val).toBe('A');
    });

    it('can search for an existing node', () => {
        let newList = new LinkedList();

        newList.insert('A');
        newList.insert('B');
        newList.insert('C');

        // expect(newList.includes('B')).toBe(true);
        expect(newList.includes('B')).toBe(console.log('item found at 1 B'));

    });

    it('can print the list in an unexpected way', () => {
        let newList = new LinkedList();
        
        newList.insert(11);
        newList.insert(22);
        newList.insert(33);

        let str = '[33] -> [22] -> [11] -> null';

        expect(newList.toString()).toBe(console.log(str));
    });

});

describe('Challenge 5: expected fail tests', () => {
  it('can respond correctly when searching for a node that doesnt exist', () => {
    let newList = new LinkedList();

    newList.insert('A');
    newList.insert('B');
    newList.insert('C');

    expect(newList.includes('D')).toBe(console.log('false, item not found D'));
  });
});

describe('Challenge 6: expected pass tests', () => {
    it('1. Can successfully add a node to the end of the linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.append('D');
  
      expect(newList.toString()).toBe(console.log('[C], [B], [A], [D]'));
    });

    it('2. Can successfully add multiple nodes to the end of a linked list', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.append('D');
        newList.append('E');
    
        expect(newList.toString()).toBe(console.log('[C], [B], [A], [D], [E]'));
      });

    it('3. Can successfully insert a node before a node located i the middle of a linked list', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.insert('D');
        newList.insertBefore('C', 'BtoC');
    
        expect(newList.toString()).toBe(console.log('[D], [C], [BtoC], [B], [A]'));
      });

      it('4. Can successfully insert a node before the first node of a linked list', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.insert('D');
    
        expect(newList.toString()).toBe(console.log('[D], [C], [B], [A]'));
      });

      it('5. Can successfully insert after a node in the middle of the linked list', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.insert('D');
        newList.insertAfter('B', 'BtoC');
    
        expect(newList.toString()).toBe(console.log('[D], [C], [BtoC], [B], [A]'));
      });

      it('6. Can successfully insert a node after the last node of the linked list', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.append('D');
    
        expect(newList.toString()).toBe(console.log('[C], [B], [A], [D]'));
      });
  });

  describe('Challenge 7: expected pass tests', () => {
    it('1. Where k is greater than the length of the linked list', () => {
      let newList = new LinkedList();
  
      newList.insert('A');
      newList.insert('B');
      newList.insert('C');
      newList.append('D');
  
      expect(newList.kthNodeFromEnd(5)).toBe(console.log('k val greater than list length'));
    });

    it('2. Where k and the length of the list are the same', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.append('D');
        newList.append('E');
    
        expect(newList.kthNodeFromEnd(5)).toBe(console.log('k of 5 val is E'));
      });

    it('3. Where k is not a positive integer', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.insert('D');
    
        expect(newList.kthNodeFromEnd(-1)).toBe(console.log('please use a positive k value'));
      });

      it('4. Where the linked list is of a size 1', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
       
        expect(newList.kthNodeFromEnd(1)).toBe(console.log('k of 1 val is A'));
      });

      it('5. “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let newList = new LinkedList();
    
        newList.insert('A');
        newList.insert('B');
        newList.insert('C');
        newList.insert('D');
        newList.insert('E');
        newList.insert('F');
        newList.insert('G');
    
        expect(newList.kthNodeFromEnd(4)).toBe(console.log('k of 4 val is D'));
      });

  });