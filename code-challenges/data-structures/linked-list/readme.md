# Linked List Implementation
The task was to create two classes: Node and LinkedList. Both should be exported by this file.
    
## Links
Pull Request: https://github.com/danwin007/data-structures-and-algorithms/pull/47
    
## Challenge
Node should have the properties: val, next, and prev (although prev was for a stretch goal).

LinkedList should have the head property as well as the following methods: insert(), includes(), and toString().

We should write tests to prove:
- Your LinkedList can successfully instantiate an empty list
- You can properly insert a value into the list
- Your LinkedList head property will correctly point to the beginning of the list
- You can insert multiple Nodes into the list successfully
- Your includes() function correctly finds a value in the list that exists
- Your includes() function correctly returns false when a value is not in the list
- Your toString() function prints out your LinkedList in an expected way
    
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Big O for adding nodes is O(1). Big O for printing the list of nodes is 0(n).
    
## API
<!-- Description of each method publicly available to your Linked List -->
No APIs used.

## Testing
<!-- Description of how to run your tests -->
Tried to get tests running. I am bad at this. Hit a weird error and am stuck. Will bring up during lecture to see where I went wrong.

Update: 4/1/20
After lecture, I went in and finished building my tests. Then I adjusted them to fit my code better and everything is working!!

/////////////

# Challenge 6 - Linked List Insertions
Practice doing linked list insertion methods. Also build unit tests.

## Challenge Description
Write the following methods for the Linked List class:

* .append(value) which adds a new node with the given value to the end of the list
* .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
* .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Approach & Efficiency
I built out all the methods first. Made sure those were working. Then I tailored the tests to fit the methods. 

## Solution
A whiteboard didn't really make sense for this challenge so I did not do one. Please let me know if I am mistaken here!

/////////////

# Challenge 7 - K-th Value from the end of a linked list
Practice doing linked list insertion methods. Also build unit tests.

## Challenge Description
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency

### Unit Tests
1. Where k is greater than the length of the linked list
2. Where k and the length of the list are the same
3. Where k is not a positive integer
4. Where the linked list is of a size 1
5. “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

## Solution
