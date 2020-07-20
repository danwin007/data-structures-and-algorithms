'use strict';

const Queue = require('../stacksAndQueues/queue');
const Graph = require('../graph/graph');

class BFSgraph extends Graph {
  constructor(){
    super();
  }

// function to performs BFS 
  bfs(startingNode) {
  
    // create a visited array 
    var visited = []; 
    for (var i = 0; i < this.noOfVertices; i++) 
        visited[i] = false; 
  
    // Create an object for queue 
    var q = new Queue(); 
  
    // add the starting node to the queue 
    visited[startingNode] = true; 
    q.enqueue(startingNode); 
  
    // loop until queue is element 
    while (q.length > 0 { 
        // get the element from the queue 
        var getQueueElement = q.dequeue(); 
  
        // passing the current vertex to callback funtion 
        console.log(getQueueElement); 
  
        // get the adjacent list for current vertex 
        var get_List = this.AdjList.get(getQueueElement); 
  
        // loop through the list and add the element to the 
        // queue if it is not processed yet 
        for (var i in get_List) { 
            var neigh = get_List[i]; 
  
            if (!visited[neigh]) { 
                visited[neigh] = true; 
                q.enqueue(neigh); 
            } 
        } 
    } 
  }
}   

let g = new Graph();
g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addNode(5);
g.addNode(6);
g.addNode(7);

g.addEdge(1, 3);
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(2, 7);

console.log(bfs(1));


