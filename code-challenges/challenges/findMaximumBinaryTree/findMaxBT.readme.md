# Challenge Summary - Breadth-First Traversal
Write a binary tree method that traverses the tree in a specific way.

## Challenge Description
Write an instance method called `find-maximum-value`. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
O(n)

## Solution

Input:
    2
  4   7

Output: [ 7 ]

Test: 
- returns max value
- handles empty tree
- handles tree with duplicate values
- handles tree with single node
- handles tree with negative numbers

Algorithm:
- if no root, return
- else, define max val, left val, right val placeholders
- traverse the tree recursively, holding values for left and right of trees
- compare placeholder values against max val through each iteration
- return max val placeholder once all traversal is done

Code:
  findMaximumValue(root = this.root) {
      // what does it mean to find the max?
      // traverse, and check against "last max"

      // base case: root is null
      if (!root) return;

      // base case: root has no children
      let rootMax = root.val;
      let leftMax, rightMax;

      if (root.left) leftMax = this.findMaximumValue(root.left);

      if (root.right) rightMax = this.findMaximumValue(root.right);

      // rootMax, leftMax and rightMax
      // compare them all and just return the
      // "true max"
      let max = rootMax;

      if (leftMax > max) max = leftMax;
      if (rightMax > max) max = rightMax;

      return max;
  }
