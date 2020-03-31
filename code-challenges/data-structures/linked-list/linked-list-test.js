'use strict';

const LinkedList = require('./linked-list.js');

describe('passes all lab tests', () => {
    it('successfully instantiates an empty list', () => {
        expect(() => {
            new LinkedList();
        }).not.toThrow();
    });

    it('can properly insert a value into the list', () => {
        let newList = new LinkedList();
        newList.addToBeginning('A');
        let str = newList.printList();

        expect(str).toBe('[A] -> null');
    });

    it('head property will correctly point to the beginning of the list', () => {
        let newList = new LinkedList();
        newList.addToBeginning('A');

        expect(newList.head.val).toBe('A');
    });

});