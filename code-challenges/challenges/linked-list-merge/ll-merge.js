'use strict';

const classes = require('./linked-list.js');
const LinkedList = classes.LinkedList;

// what does it mean to have a linked list
// sent as a parameter

// list1 and list2 = the head node of a linked list

const mergeLists = (list1, list2) => {

    try {
    // build a new list
    let mergedList = new LinkedList();

    // iterate through list1 and list2 in tandem
    // these vars are restated in order to avoid modifying the original inputs
    let l1_tracker = list1;
    let l2_tracker = list2;

    // while either list1 or list2 has a node
    while (l1_tracker || l2_tracker) {
        // check if l1 is a node
        // append to list
        // increment l1 to next
        if (l1_tracker) {
            mergedList.append(l1_tracker.val);
            l1_tracker = l1_tracker.next;
        }

        // check if l2 is a node
        // append to list
        // increment l2 to next
        if (l2_tracker) {
            mergedList.append(l2_tracker.val);
            l2_tracker = l2_tracker.next;
        }
    }

    // should we return the Linked List object
    // or just the head node?
    // I would personally return the LL object,
    // but instructions say head node
    return mergedList;
    // return mergedList.head
} catch(error){
    throw error;
}
};

const mergeListsO1 = (list1, list2) => {
    // iterate through list1 and list2 in tandem

    let l1_tracker = list1;
    let l2_tracker = list2;
    let l3_tracker = null;
    let l3_head = null;

    while (l1_tracker || l2_tracker) {
        if (l1_tracker) {
            if (!l3_head) {
                l3_tracker = l1_tracker;
                l3_head = l1_tracker;
            } else {
                l3_tracker.next = l1_tracker;
                l3_tracker = l3_tracker.next;
            }
            l1_tracker = l1_tracker.next;
        }

        if (l2_tracker) {
            if (!l3_head) {
                l3_tracker = l2_tracker;
                l3_head = l2_tracker;
            } else {
                l3_tracker.next = l2_tracker;
                l3_tracker = l3_tracker.next;
            }
            l2_tracker = l2_tracker.next;
        }
    }

    return l3_head;
};

//testing test 2
let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list1.toString();

let list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(7);
list2.toString();

let zipped = mergeLists(list1.head, list2.head);
console.log('l1 and l2');
zipped.toString();

let list3 = new LinkedList();
let list4 = [];

let zipped2 = mergeLists(list3, list4);
zipped2.toString();
module.exports = { mergeLists, mergeListsO1 };