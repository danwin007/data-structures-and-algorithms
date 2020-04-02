'use strict';

const classes = require('./linked-list.js');
const LinkedList = classes.LinkedList;

describe('expected success tests', () => {
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

describe('expected fail tests', () => {
  it('can respond correctly when searching for a node that doesnt exist', () => {
    let newList = new LinkedList();

    newList.insert('A');
    newList.insert('B');
    newList.insert('C');

    expect(newList.includes('D')).toBe(console.log('false, item not found D'));
  });
});