# Merge Sort

# Challenge Summary
Review the pseudocode, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.

## Challenge Description
In your blog article, visually show the output of processing this input array:

[8,4,23,42,16,15]

For your own understanding, consider also stepping through these inputs:

Reverse-sorted: [20,18,12,8,5,-2]
Few uniques: [5,12,7,5,5,7]
Nearly-sorted: [2,3,5,7,13,11]

### Implementation

Provide a visual step through for each of the sample arrays based on the provided pseudo code
Convert the pseudo-code into working code in your language
Present a complete set of working tests

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Big 0 Worst case: O(nlogn)

## Solution

  const mergeSort = array => {
    if(array.length < 2) return array;
    const middle = Math.floor(array.length/2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    return merge(mergeSort(leftSide), mergeSort(rightSide));

  }

  const merge = (left, right) => {
    const result = [];
    while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());  
    }
  }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
  }
