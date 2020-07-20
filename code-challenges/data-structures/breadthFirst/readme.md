# Graphs - Breadth First Traversal
Implement a breadth-first traversal on a graph.

## Challenge
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency

- Create  queue to hold nodes, add starting node to it
- Create a way to track visited nodes, add start node
- While queue exists
    - Dequeue from the queue and set to current
    - Loop through all the node's neighbors
        - For each neighbor, check if node has been visited
        - If not visited, add node to the queue and add mark as visited
    - Operate on current
- Traversal is done when the queue is empty

## API
- 

## Solution

I could not get this working properly and it makes me sad

## Credit

[BFS Graph Implementation](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#Breadth-first-search-BFS-Graph-search)

[Graph Search Algorithms](https://www.youtube.com/watch?v=cWNEl4HE2OE)

[BFS Traversal in JS](https://www.tutorialspoint.com/Breadth-first-search-traversal-in-Javascript)

[Tutorials Point Guide](https://tutorialspoint.dev/data-structure/graph-data-structure/implementation-graph-javascript)