'use strict';

class Graph {
  constructor(){
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({node: node2, weight: weight});
    this.adjacencyList[node2].push({node: node1, weight: weight});
  }

  getEdgeDijkstra(startNode, endNode) {
    let cost = {};
    let backTrace = {};
    let q = new Queue();
  
    cost[startNode] = 0;
  
    this.nodes.forEach(node => {
      if (node !== startNode) {
        cost[node] = Infinity
      }
    });
  
    q.enqueue([startNode, 0]);
  
    while (!q.isEmpty()) {
      let cheapestStep = q.dequeue();
      let currentNode = cheapestStep[0];
  
      this.adjacencyList[currentNode].forEach(neighbor => {
        let fullCost = cost[currentNode] + neighbor.weight;
        if (fullCost < cost[neighbor.node]) {
          cost[neighbor.node] = fullCost;
          backTrace[neighbor.node] = currentNode;
          q.enqueue([neighbor.node, fullCost]);
        }
      });
    }
  
    let path = [endNode];
    let lastStep = endNode;
  
    while (lastStep !== startNode) {
      path.unshift(backTrace[lastStep])
      lastStep = backTrace[lastStep]
    }
  
    if (path) {

      return 'True, $' + cost[endNode]
    } else {
      return 'False, $0'
    }
  }
}

class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 1; i <= this.collection.length; i++) {
        if (element[1] < this.collection[i-1][1]){
          this.collection.splice(i-1, 0, element);
          added = true;
          break
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    let value = this.collection.shift();
    return value;
  }

  isEmpty() {
    return (this.collection.length === 0)
  }
}

let map = new Graph();
map.addNode('Pandora');
map.addNode('Arendelle');
map.addNode('Metroville');
map.addNode('Monstropolis');
map.addNode('Naboo');
map.addNode('Narnia');

map.addEdge('Pandora', 'Arendelle', 150);
map.addEdge('Pandora', 'Metroville', 82);
map.addEdge('Metroville', 'Narnia', 37);
map.addEdge('Metroville', 'Naboo', 26);
map.addEdge('Metroville', 'Arendelle', 99);
map.addEdge('Metroville', 'Monstropolis', 105);
map.addEdge('Narnia', 'Naboo', 250);
map.addEdge('Naboo', 'Monstropolis', 73);
map.addEdge('Monstropolis', 'Arendelle', 42);


console.log(map.getEdgeDijkstra('Metroville', 'Pandora'));
console.log(map.getEdgeDijkstra('Metroville', 'Pandora'));

console.log(map.getEdgeDijkstra('Naboo', 'Pandora'));
console.log(map.getEdgeDijkstra('Metroville', 'Pandora'));


