'use strict';

// implement graph
// addNode()
  //adds node, takes in val, returns node
// addEdge()
  //adds edge, takes in weight, takes in two nodes, nodes should already be in graph
// getNodes()
  //returns all nodes in graph as a collection
// getNeighbors()
  //returns a collection of edges connected to given node, takes in node, includes weight of collection in returned collection
// size()
  //returns total number of nodes in graph

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
    return this.nodes;
  }

  addEdge(node1, node2, weight = 1) {
    this.edges[node1].push({node: node2, weight: weight});
    this.edges[node2].push({node: node1, weight: weight});
  }

  getNodes(){
    let graph = "";
      this.nodes.forEach(node => {
         graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
      });
      console.log(graph);
      return graph;
  }

  getNeighbors(node) {
    console.log(this.edges[node]);
    return this.edges[node];
  }

  size() {
    console.log(this.nodes.length);
    return this.nodes.length;
  }
}

const myGraph = new Graph();
myGraph.addNode('test1');
myGraph.addNode('test2');
myGraph.addNode('test3');
myGraph.addNode('test4');
myGraph.addEdge('test1', 'test2');

myGraph.getNeighbors('test1');
myGraph.getNodes();
// myGraph.size();


module.exports = Graph;