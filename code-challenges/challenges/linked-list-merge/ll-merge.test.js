// think of tests on our own!

// Happy Path - everything works as expected
// everything in the examples on the cc
// -- two lists of the same length
// -- list1 shorter than list2
// -- list2 shorter than list1

const classes = require('./linked-list.js');
const LinkedList = classes.LinkedList;
const mergeLists = require('./ll-merge.js');
const ineff = mergeLists.mergeLists;
const eff = mergeLists.mergeListsO1;

describe('happy path', () => {
    it('works for two lists of the same length', () => {
        // create the first list
        let list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);

        let list2 = new LinkedList();
        list2.append(5);
        list2.append(9);
        list2.append(4);

        let zipped = ineff(list1, list2);

        // expect(zipped.val).toBe(1);
        // expect(zipped.next.val).toBe(5);
        // expect(zipped.next.next.val).toBe(3);
        // expect(zipped.next.next.next.val).toBe(9);
        // expect(zipped.next.next.next.next.val).toBe(2);
        // expect(zipped.next.next.next.next.next.val).toBe(4);
        // expect(zipped.next.next.next.next.next.next).toBe(null);

        // let expectedValues = [1, 5, 3, 9, 2, 4, null];
        // let currentNode = zipped;
        // let i = 0;

        // while (currentNode) {
        //     expect(currentNode.val).toBe(expectedValues[i]);
        //     currentNode = currentNode.next;
        //     i++;
        // }

        expect(zipped.toString()).toBe(console.log('[1] -> [5] -> [3] -> [9] -> [2] -> [4]->null'));
    });

    it('works for list 1 being shorter than list 2', () => {
        // create the first list
        let list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(5);

        let list2 = new LinkedList();
        list2.append(2);
        list2.append(4);
        list2.append(6);
        list2.append(7);

        let zipped = ineff(list1.head, list2.head);

        expect(zipped.toString()).toBe(console.log('[1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] ->null'));
    });

    it('works for list 2 being shorter than list 1', () => {
        // create the first list
        let list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(5);
        list1.append(7);

        let list2 = new LinkedList();
        list2.append(2);
        list2.append(4);
        list2.append(6);

        let zipped = ineff(list1, list2);

        expect(zipped.toString()).toBe(console.log('[1] -> [2] -> [3] -> [4] -> [5] -> [6] -> [7] ->null'));
    });
});

// Expected Failures - bad input = bad output
// -- BOTH list1 and list2 is null
// -- either list1 or list2 is not a linked list

describe('fail path', () => {
    it('both lists are null', () => {
        console.log = jest.fn();
        let list1 = new LinkedList();
        let list2 = new LinkedList();

        let zipped = ineff(list1, list2);

        expect(console.log).not.toHaveBeenCalled();
    });

    it('one of the lists is not a linked list', () => {
        let list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(5);
        list1.append(7);

        let list2 = [];

        let zipped = ineff(list1, list2);

        expect(console.log).not.toHaveBeenCalled();
    });
});
