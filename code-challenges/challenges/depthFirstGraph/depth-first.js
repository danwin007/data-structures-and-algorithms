'use strict';

const Stack = require("../../data-structures/stacksAndQueues/stack");

class Graph {
  constructor(){
    this.nodeCount = 0;
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodeCount++;
    this.adjacencyList[node] = { value: node, edges: {}};
  }

  addEdge(node1, node2, weight = null) {
    if(!this.adjacencyList[node1].edges[node2]) {
      this.adjacencyList[node1].edges[node2] = weight;
      this.adjacencyList[node2].edges[node1] = weight;
    }
  }

  getNodes() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(node) {
    if (this.adjacencyList[node]) {
      return Object.entries(this.adjacencyList[node].edges);
    }
  }

  getAdjacent() {
    return this.adjacencyList;
  }

  size() {
    return this.nodeCount;
  }

  getEdge(graph, array) {
    let cost = 0;
    
    if (!graph.adjacencyList[array[0]]) {
      return 'False, $0';
    }

    for (let i = 0; i < array.length-1; i++) {
      let neighbors = graph.getNeighbors(array[i]);
      let found = false;

      for (let j = 0; j < neighbors.length; j++) {
        if (neighbors[j][0] === array[i + 1]) {
          found = true;
          cost += neighbors[j][1];
        }
      }

      if (!found) {
        return 'False, $0';
      }
    }

    return `True, $${cost}`;
  }

  *dfs(node) {
    const visited = new Map();
    const visitList = new Stack();

    visitList.push(node);

    while (!visitList.isEmpty()) {
      const curr = visitList.pop();

      if (curr && !visited.has(curr)) {
        yield curr;
        visited.set(curr);
        curr.getAdjacent().forEach(adj => visitList.push(adj));
      }
     }

  }

  
}



let map = new Graph();
map.addNode('A');
map.addNode('B');
map.addNode('C');
map.addNode('D');
map.addNode('E');
map.addNode('F');
map.addNode('G');
map.addNode('H');

map.addEdge('A', 'B');
map.addEdge('A', 'D');
map.addEdge('D', 'B');
map.addEdge('C', 'B');
map.addEdge('C', 'G');
map.addEdge('D', 'E');
map.addEdge('D', 'H');
map.addEdge('D', 'F');
map.addEdge('F', 'H');

let mapA = map.dfs('A');
visitedOrder = Array.from(mapA);
const values = visitedOrder.map(node => node.value);
console.log(values);

module.exports = Graph;
