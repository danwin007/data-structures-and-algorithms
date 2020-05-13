# Challenge Summary - Breadth-First Traversal
Write a breadth first traversal method which takes a Binary Tree as its unique input. 

## Challenge Description
Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
O(n)

## Solution

Input:
    A
  B   C

Output: [ A, B, C]

Test: 
- big tree
- small tree
- empty tree

Algorithm:
- if empty, return empty array
- else, make a new queue, adding the root
- run through all children, enqueueing and dequeueing, printing each node.val to the array while looping through
- return the array with values for all the nodes

Code:
`breadthFirst(root = this.root) {
        let printedArr = [];

        // base case - empty tree
        if (!root) return printedArr;

        // iterative case - tree with children

        let q = new Queue();
        q.enqueue(root); // Node {A}

        // as long as there is something in the queue,
        // enqueue children and dequeue

        while (q.front) {
            // QNode { TreeNode {A} }.val.left
            // TreeNode {A}.left
            if (q.front.val.left) q.enqueue(q.front.val.left);
            // Node {A}.right
            if (q.front.val.right) q.enqueue(q.front.val.right);

            let removedItem = q.dequeue();
            printedArr.push(removedItem.val);
        }

        return printedArr;
    }`
